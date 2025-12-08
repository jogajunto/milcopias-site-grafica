import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { city, name, phone, email, company, solution, numeroImpressorasMultifuncionas, numeroImpressorasTermicas, numeroImpressorasPlotter, numeroScanners, numeroNotebooks, numeroCatracas, numeroFuncionarios, message, honeypot, formDuration } = await req.json();

  const currentDate = new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });

  // 1) Honeypot: se o campo escondido foi preenchido, provavelmente é bot
  if (honeypot && typeof honeypot === "string" && honeypot.trim().length > 0) {
    // Retorna 200 para não dar pista para bot, mas não processa nada.
    return NextResponse.json({ message: "Form submitted successfully!" }, { status: 200 });
  }

  // 2) Checagem de tempo de preenchimento (opcional, mas ajuda)
  // Ex.: se o formulário foi enviado em menos de 2 segundos desde o carregamento
  if (typeof formDuration === "number" && formDuration < 2000) {
    return NextResponse.json({ message: "Form submitted successfully!" }, { status: 200 });
  }

  // 3) Validações básicas do lado do servidor (boa prática)
  if (!name || !email || !phone || !company || !solution || !city) {
    return NextResponse.json({ error: "Campos obrigatórios não preenchidos." }, { status: 400 });
  }

  try {
    const rdResponse = await fetch(`https://api.rd.services/platform/conversions?api_key=${process.env.RD_API_ACCESS_TOKEN}`, {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        event_type: "CONVERSION",
        event_family: "CDP",
        payload: {
          conversion_identifier: "contato",
          name: name,
          email: email,
          phone: phone,
          city: city,
          company_name: company,
          cf_mensagem: message,

          cf_interesse_em_aluguel_de_catraca: solution === "aluguel-de-catraca" ? currentDate : "",
          cf_interesse_em_aluguel_de_impressora_plotter: solution === "aluguel-de-impressora-plotter" ? currentDate : "",
          cf_interesse_em_aluguel_de_impressora_termica: solution === "aluguel-de-impressora-termica" ? currentDate : "",
          cf_interesse_em_aluguel_de_impressora: solution === "aluguel-de-impressora-multifuncional" ? currentDate : "",
          cf_interesse_em_aluguel_de_notebook: solution === "aluguel-de-notebook" ? currentDate : "",
          cf_interesse_em_controle_de_ponto: solution === "aluguel-de-controle-de-ponto" ? currentDate : "",
          cf_interesse_em_digitalizacao_de_documentos: solution === "digitalizacao-de-documentos" ? currentDate : "",
          cf_interesse_em_relogio_de_ponto: solution === "aluguel-de-relogio-de-ponto" ? currentDate : "",

          cf_quantidade_de_impressoras_plotter: numeroImpressorasPlotter || "",
          cf_quantidade_de_impressoras_termicas: numeroImpressorasTermicas || "",
          cf_quantidade_de_notebooks: numeroNotebooks || "",
          cf_quantidade_de_scanners: numeroScanners || "",
          cf_quantidade_de_impressoras: numeroImpressorasMultifuncionas || "",
          cf_quantidade_de_funcionarios: numeroFuncionarios || "",
          cf_quantidade_de_catracas: numeroCatracas || "",
        },
      }),
    });

    if (!rdResponse.ok) {
      throw new Error("Failed to send data to RD Station.");
    }

    return NextResponse.json({ message: "Form submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error sending data to RD Station." }, { status: 500 });
  }
}
