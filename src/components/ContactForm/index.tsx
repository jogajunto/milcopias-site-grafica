"use client";

import { useState } from "react";

import { servedCities, unservedCities } from "@/lib/cities";
import { formatPhone } from "@/utilities/format-phone";
import { CheckCircle, Loader, XCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "../Button";
import { Input } from "../ui/input";
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "../ui/native-select";
import { Textarea } from "../ui/textarea";

import { useServices } from "@/contexts/ServicesContext";
import { Service } from "@/payload-types";

type ContactForm = {
  type: "contact" | "whatsapp";
};

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  solution: string;
  city: string;
  numeroImpressorasMultifuncionas: string;
  numeroImpressorasTermicas: string;
  numeroImpressorasPlotter: string;
  numeroScanners: string;
  numeroNotebooks: string;
  numeroCatracas: string;
  numeroFuncionarios: string;
  honeypot: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
  solution: "",
  city: "",
  numeroImpressorasMultifuncionas: "",
  numeroImpressorasTermicas: "",
  numeroImpressorasPlotter: "",
  numeroScanners: "",
  numeroNotebooks: "",
  numeroCatracas: "",
  numeroFuncionarios: "",
  honeypot: "",
};

function buildWhatsAppMessage(formData: FormState, services: Service[]) {
  const selectedService = services.find((service) => service.slug === formData.solution);
  const solutionName = selectedService?.title ?? formData.solution;

  let details = "";

  if (formData.numeroImpressorasMultifuncionas) {
    details = `Temos ${formData.numeroImpressorasMultifuncionas} impressoras multifuncionais.`;
  } else if (formData.numeroImpressorasTermicas) {
    details = `Temos ${formData.numeroImpressorasTermicas} impressoras térmicas.`;
  } else if (formData.numeroImpressorasPlotter) {
    details = `Temos ${formData.numeroImpressorasPlotter} impressoras plotter.`;
  } else if (formData.numeroScanners) {
    details = `Temos ${formData.numeroScanners} scanners.`;
  } else if (formData.numeroNotebooks) {
    details = `Temos ${formData.numeroNotebooks} notebooks.`;
  } else if (formData.numeroCatracas) {
    details = `Temos ${formData.numeroCatracas} catracas.`;
  } else if (formData.numeroFuncionarios) {
    details = `Temos ${formData.numeroFuncionarios} funcionários.`;
  }

  const city = formData.city ? `Estamos em ${formData.city}. ` : "";
  const message = `Olá, sou ${formData.name} da ${formData.company} e tenho interesse na solução de ${solutionName}. ${city}${details}Poderiam me passar mais informações?`;
  return message.trim();
}

function buildWhatsAppUrl(formData: FormState, services: Service[]) {
  const numeroWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5599999999999"; // coloque o número no env
  const mensagem = buildWhatsAppMessage(formData, services);
  const encoded = encodeURIComponent(mensagem);

  return `https://wa.me/${numeroWhatsApp}?text=${encoded}`;
}

export function ContactForm({ type }: ContactForm) {
  const services = useServices();

  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formStartTime] = useState<number>(() => Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "phone":
        setFormData({ ...formData, [name]: formatPhone(value) });
        break;
      default:
        setFormData({ ...formData, [name]: value });
        break;
    }
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setSuccessMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const formDuration = Date.now() - formStartTime; // ms

      const response = await fetch("/api/submit-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type,
          formDuration,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o formulário.");
      }

      if (type === "whatsapp") {
        const whatsappUrl = buildWhatsAppUrl(formData, services);
        resetForm();
        setSuccessMessage("Mensagem enviada com sucesso!");
        window.open(whatsappUrl, "_blank");
      } else {
        resetForm();
        setSuccessMessage("Mensagem enviada com sucesso!");
      }
    } catch {
      setErrorMessage("Erro ao enviar o formulário. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit} data-ga4-tracking="contact-form">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Seu site</label>
        <Input id="website" name="honeypot" type="text" autoComplete="off" tabIndex={-1} value={formData.honeypot} onChange={handleChange} />
      </div>

      <div className="grid gap-x-4 gap-y-3 lg:grid-cols-2">
        <div className="flex flex-col gap-1.5 lg:col-span-2">
          <label htmlFor="city">Cidade</label>
          <NativeSelect id="city" name="city" onChange={handleChange} required>
            <NativeSelectOption value="">Selecione</NativeSelectOption>
            <NativeSelectOptGroup label="Cidades que atendemos">
              {servedCities.map((city) => (
                <NativeSelectOption key={city} value={city}>
                  {city}
                </NativeSelectOption>
              ))}
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Cidades que não atendemos">
              {unservedCities.map((city) => (
                <NativeSelectOption key={city} value={city} disabled>
                  {city}
                </NativeSelectOption>
              ))}
            </NativeSelectOptGroup>
          </NativeSelect>
          <p className="text-secondary mb-1 text-xs text-pretty">*Atendemos em um raio de até 130 km a partir da cidade de Linhares, abrangendo quase todo o território do estado do Espírito Santo.</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="name">Nome completo</label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Digite o seu nome" required />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone">Telefone</label>
          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(00) 00000-0000" minLength={14} maxLength={15} required />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email">E-mail corporativo</label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Digite o seu e-mail" required />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company">Empresa</label>
          <Input id="company" name="company" type="text" value={formData.company} onChange={handleChange} placeholder="Insira o nome da empresa" required />
        </div>

        <div className="flex flex-col gap-1.5 lg:col-span-2">
          <label htmlFor="solution">Solução de interesse</label>
          <NativeSelect id="solution" name="solution" onChange={handleChange} required>
            <NativeSelectOption value="">Selecione</NativeSelectOption>
            {services.map((service: Service) => (
              <NativeSelectOption key={service.id} value={service.slug!}>
                {service.title}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </div>

        {formData.solution === "aluguel-de-impressora-multifuncional" && (
          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <label htmlFor="numeroImpressorasMultifuncionas">N° de impressoras</label>
            <NativeSelect id="numeroImpressorasMultifuncionas" name="numeroImpressorasMultifuncionas" onChange={handleChange} required>
              <NativeSelectOption value="">Selecione</NativeSelectOption>
              <NativeSelectOption value="Entre 1 e 5">Entre 1 e 5</NativeSelectOption>
              <NativeSelectOption value="Entre 6 e 19">Entre 6 e 19</NativeSelectOption>
              <NativeSelectOption value="Mais de 20">Mais de 20</NativeSelectOption>
            </NativeSelect>
          </div>
        )}

        {formData.solution === "aluguel-de-impressora-termica" && (
          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <label htmlFor="numeroImpressorasTermicas">N° de impressoras</label>
            <NativeSelect id="numeroImpressorasTermicas" name="numeroImpressorasTermicas" onChange={handleChange} required>
              <NativeSelectOption value="">Selecione</NativeSelectOption>
              <NativeSelectOption value="Entre 1 e 5">Entre 1 e 5</NativeSelectOption>
              <NativeSelectOption value="Entre 6 e 19">Entre 6 e 19</NativeSelectOption>
              <NativeSelectOption value="Mais de 20">Mais de 20</NativeSelectOption>
            </NativeSelect>
          </div>
        )}

        {formData.solution === "aluguel-de-impressora-plotter" && (
          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <label htmlFor="numeroImpressorasPlotter">N° de impressoras</label>
            <Input id="numeroImpressorasPlotter" name="numeroImpressorasPlotter" type="text" value={formData.numeroImpressorasPlotter} onChange={handleChange} placeholder="Insira a quantidade" required />
            <NativeSelect id="numeroImpressorasPlotterSelect" name="numeroImpressorasPlotter" onChange={handleChange} required>
              <NativeSelectOption value="">Selecione</NativeSelectOption>
              <NativeSelectOption value="Até 2">Até 2</NativeSelectOption>
              <NativeSelectOption value="Mais de 2">Mais de 2</NativeSelectOption>
            </NativeSelect>
          </div>
        )}

        {formData.solution === "aluguel-de-notebook" && (
          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <label htmlFor="numeroNotebooks">N° de notebooks</label>
            <NativeSelect id="numeroNotebooks" name="numeroNotebooks" onChange={handleChange} required>
              <NativeSelectOption value="">Selecione</NativeSelectOption>
              <NativeSelectOption value="Entre 1 e 5">Entre 1 e 5</NativeSelectOption>
              <NativeSelectOption value="Entre 6 e 19">Entre 6 e 19</NativeSelectOption>
              <NativeSelectOption value="Mais de 20">Mais de 20</NativeSelectOption>
            </NativeSelect>
          </div>
        )}

        {formData.solution === "digitalizacao-de-documentos" && (
          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <label htmlFor="numeroScanners">N° de scanners</label>
            <NativeSelect id="numeroScanners" name="numeroScanners" onChange={handleChange} required>
              <NativeSelectOption value="">Selecione</NativeSelectOption>
              <NativeSelectOption value="Entre 1 e 5">Entre 1 e 5</NativeSelectOption>
              <NativeSelectOption value="Entre 6 e 19">Entre 6 e 19</NativeSelectOption>
              <NativeSelectOption value="Mais de 20">Mais de 20</NativeSelectOption>
            </NativeSelect>
          </div>
        )}

        {formData.solution === "aluguel-de-catraca" && (
          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <label htmlFor="numeroCatracas">N° de catracas</label>
            <NativeSelect id="numeroCatracas" name="numeroCatracas" onChange={handleChange} required>
              <NativeSelectOption value="">Selecione</NativeSelectOption>
              <NativeSelectOption value="Entre 1 e 5">Entre 1 e 5</NativeSelectOption>
              <NativeSelectOption value="Entre 6 e 10">Entre 6 e 10</NativeSelectOption>
              <NativeSelectOption value="Mais de 10">Mais de 10</NativeSelectOption>
            </NativeSelect>
          </div>
        )}

        {formData.solution === "aluguel-de-controle-de-ponto" && (
          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <label htmlFor="numeroFuncionarios">N° de funcionários</label>
            <NativeSelect id="numeroFuncionarios" name="numeroFuncionarios" onChange={handleChange} required>
              <NativeSelectOption value="">Selecione</NativeSelectOption>
              <NativeSelectOption value="Entre 1 e 10">Entre 1 e 10</NativeSelectOption>
              <NativeSelectOption value="Entre 11 e 50">Entre 11 e 50</NativeSelectOption>
              <NativeSelectOption value="Entre 51 e 200">Entre 51 e 200</NativeSelectOption>
              <NativeSelectOption value="Entre 201 e 500">Entre 201 e 500</NativeSelectOption>
              <NativeSelectOption value="Mais de 500">Mais de 500</NativeSelectOption>
            </NativeSelect>
          </div>
        )}

        {type === "contact" && (
          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <label htmlFor="message">Mensagem</label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Digite a sua mensagem" required />
          </div>
        )}
      </div>

      <footer className="mt-4 space-y-4">
        <p className="text-woodsmoke-lighter">
          Ao submeter os dados, você concorda com a nossa{" "}
          <Link className="hover:text-pear underline transition-colors duration-300" href="/politica-de-privacidade">
            Política de Privacidade
          </Link>
          .
        </p>

        <Button variant="primary" size="md" type="submit" disabled={loading}>
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader className="animate-spin" />
              Enviando
            </span>
          ) : (
            <span>Enviar</span>
          )}
        </Button>

        {successMessage && (
          <div className="flex items-center gap-2">
            <CheckCircle className="inline-block h-6 w-6" />
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="flex items-center gap-2">
            <XCircle className="text-error-light inline-block h-6 w-6" />
            {errorMessage}
          </div>
        )}
      </footer>
    </form>
  );
}
