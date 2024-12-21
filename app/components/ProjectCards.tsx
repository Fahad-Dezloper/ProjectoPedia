  import Card from "./Card";

  const ProjectCards = () => {
      const projects = [
          {
            title: "ColorHunt",
            projectName: "Color Palette Generator",
            hashtags: ["#Colors", "#DesignTools"],
            builderName: "Gal Shir",
            description:
              "ColorHunt is a free color palette inspiration tool that helps designers and developers generate beautiful color schemes. Users can browse through a curated collection of palettes or create their own, making it an essential tool for UI/UX designers and web developers.",
            link: "https://colorhunt.co",
            snapshot: "https://tse3.mm.bing.net/th?id=OIP.-6y5IO9p9_FVSKmi1zqHKQHaHa&pid=Api",
          },
          {
            title: "Storybook",
            projectName: "React Component Library Tool",
            hashtags: ["#ReactComponents", "#UIComponents"],
            builderName: "Open-source community",
            description:
              "Storybook is a development environment for UI components. It allows developers to create and showcase prebuilt React components in isolation, improving code reusability and streamlining the design-to-development handoff. It's widely used for testing and sharing UI work.",
            link: "https://storybook.js.org",
            snapshot: "https://tse2.mm.bing.net/th?id=OIP.NJeGg_XrD64Arp1Z1zXnTAHaD4&pid=Api",
          },
          {
            title: "CSSGradient.io",
            projectName: "Gradient Generator",
            hashtags: ["#CSS", "#WebDesign"],
            builderName: "Colorzilla",
            description:
              "CSSGradient.io is a simple tool for generating CSS gradients. It provides designers and developers with a user-friendly interface to create custom gradient backgrounds with ease. The site also includes prebuilt gradients for inspiration.",
            link: "https://cssgradient.io",
            snapshot: "https://tse1.mm.bing.net/th?id=OIP.8XVFwxjz58V8zzcmVmzqXQHaE8&pid=Api",
          },
          {
            title: "CSSGradient.io",
            projectName: "Gradient Generator",
            hashtags: ["#CSS", "#WebDesign"],
            builderName: "Colorzilla",
            description:
              "CSSGradient.io is a simple tool for generating CSS gradients. It provides designers and developers with a user-friendly interface to create custom gradient backgrounds with ease. The site also includes prebuilt gradients for inspiration.",
            link: "https://cssgradient.io",
            snapshot: "https://tse1.mm.bing.net/th?id=OIP.8XVFwxjz58V8zzcmVmzqXQHaE8&pid=Api",
          },
        ];
      return (
          <div className='flex justify-between px-4 gap-6'>
              {projects.map((item, index) => (
              <Card key={index} url='https://colorhunt.co/' />
            ))}
            </div>
      )
  }

  export default ProjectCards