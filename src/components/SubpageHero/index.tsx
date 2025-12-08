import BoxedSection from "../BoxedSection";

type SubpageHeroProps = {
  uppertitle: string;
  title: string;
  description: string;
};

export function SubpageHero({ uppertitle, title, description }: SubpageHeroProps) {
  return (
    <BoxedSection fullScreen={false}>
      <div className="container">
        <div className="grid items-end gap-10 lg:grid-cols-9">
          <div className="space-y-10 lg:col-span-4">
            <h1 className="flex flex-col gap-3">
              <span className="uppertitle">{uppertitle}</span>
              <span className="heading-lg">{title}</span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-max">
              <p className="subheading text-secondary text-balance">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </BoxedSection>
  );
}
