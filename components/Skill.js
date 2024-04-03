import Link from "next/link";

const items = [
  {
    id: 1,
    name: "Python",
    image: "assets/images/skills/skill7.png",
    value: "90",
  },
  {
    id: 2,
    name: "Javascript",
    image: "assets/images/skills/js.png",
    value: "95",
  },
  {
    id: 3,
    name: "GoLang",
    image: "assets/images/skills/go.png",
    value: "70",
  },
  {
    id: 4,
    name: "C#",
    image: "assets/images/skills/c.png",
    value: "50",
  },
  {
    id: 5,
    name: "Redis",
    image: "assets/images/skills/redis.png",
    value: "80",
  },
  {
    id: 6,
    name: "Docker",
    image: "assets/images/skills/docker.png",
    value: "85",
  },
  {
    id: 7,
    name: "AWS",
    image: "assets/images/skills/aws.png",
    value: "87",
  },
  {
    id: 8,
    name: "Langchain",
    image: "assets/images/skills/lang.png",
    value: "90",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Discover My Capabilities: Dive into <span>My Skills</span>
                  </h2>
                  <p>
                  Dive into a world of expertise where I combine passion with proficiency. Explore the tools, languages, and frameworks I wield to craft innovative solutions and drive success. Let's embark on a journey through my diverse skillset and experience firsthand the depth of my capabilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {items.map((item) => (
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src={item.image} alt="Skill" />
                        <h5>{item.name}</h5>
                        <span className="percent">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Skill;

export const Skill2 = () => {
  return (
    <section
      id="skills"
      className="skill-area-two rel z-1 pt-130 rpt-100 pb-105 rpb-70"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skill-content-two rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-60">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> professional skill of me
                </span>
                <h2>professional skill</h2>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-8">
                  <img src="assets/images/skills/skill-man.png" alt="Skill" />
                </div>
                <div className="col-4">
                  <img src="assets/images/shape/skill-arrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="skill-wrap-two">
              <div className="row gap-40">
                {items.map(
                  (item) =>
                    item.id <= 6 && (
                      <div className="col-md-4 col-sm-4 col-6" key={item.id}>
                        <div className="skill-item-two wow fadeInUp delay-0-3s">
                          <div className="icon-percent">
                            <img src={item.image} alt="Skill" />
                            <span className="percent">{item.value}%</span>
                          </div>
                          <h5 className="title">{item.name}</h5>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
