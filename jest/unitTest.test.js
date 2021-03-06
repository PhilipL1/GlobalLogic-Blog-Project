const { checkUser, checkblog, checkblog2, checkblog3 } = require("./unitTest");

describe("Check Blog content ", () => {
  it(" check first Blog content", () => {
    const blogs = checkblog();
    expect(blogs).toEqual([
      {
        id: 1,
        snippet:
          "\n" +
          "\n" +
          "How do you optimise DevOps for innovation at scale?\n" +
          "\n" +
          "This was the overarching question a...",
        title: "IDC",
        author: "Philip",
        content:
          "\n" +
          "\n" +
          "How do you optimise DevOps for innovation at scale?\n" +
          "\n" +
          "This was the overarching question at this year’s IDC DevOps Conference. Optimising DevOps goes beyond trialling DevOps in a pocket of your organisation. Optimisation is about scaling DevOps principles and new ways of working to accelerate application delivery.\n" +
          "\n" +
          "IDC predict that by 2021, 80% of European organisations will have adopted DevOps, but only 10% will be excelling performance and delivery cycles. This statistic draws parallels with McKinsey, who state that the success rates for transformation initiatives currently sits at 4-11%, with this jumping to an unexceptional 26% within high tech industries.\n" +
          "\n" +
          "One of the biggest culprits of failure is siloes. Siloed teams, siloed thinking and siloed execution. Everyone has a role to play in a transformation, and the sooner you facilitate a wholistic team ownership, the greater your chances of success.\n" +
          "\n" +
          "There is also the problem of changing for change sake.\n" +
          "\n" +
          "Much in the same way Nokia fell victim to technological advancement and rapid market change by focusing too greater on reorganising structure to make way for agile, businesses need to focus on process and engineering capabilities so their entire team retain the technologically savviness and strategic integrative to set priorities and resolve conflicts arising in the new matrix.\n" +
          "\n" +
          "As touched on in Sarndeep Nijjar’s talk Digital Transformation – Disruption that Drives Meaningful Enterprise Change, “Engineering allows you to move fast, and without it no matter how big your ideas and vision is for products, you will never be able to achieve the release cadence you need….we have seen so many projects missed deadlines, because senior developers where not involved in the ideation stage, to give the project a level of realism.”\n" +
          "\n" +
          "Accelerating application delivery is about more than wanting to become a software business. Success comes from raising the profile of five key competencies to move you into a new way of working that provides continuous and sustainable change.\n" +
          "\n" +
          "We are already starting to see organisations invest their efforts into environment and tool standardisation. Jen Thomson believes this trend will continue long into 2021, alongside an increasing adoption of a community-driven approach that will share and grow open source repositories.\n" +
          "\n" +
          "Data lake programmes are also becoming increasingly popular, but not always to their potential. Often, collaboration between business SME, data architects and development teams to define how data should be represented and consumed is missing. This has a knock-on effect to how this data is fed back to the rest of the organisation to leverage. In the words of Sarndeep, “we have seen many projects suffer not because they lacked the engineering to deliver but because they didn’t have the data, they needed in the correct structure to serve to their end users.”\n" +
          "\n" +
          "ECS itself works across a multitude of industries, which gives us a pretty unique lens. We operate in the financial, energy, telecommunications, pharmaceutical, insurance and retail verticals, witnessing failure first-hand, but also success.\n" +
          "\n" +
          "This experience led to the creation and launch of the Digital Engine Room – a unique space in your organisation with the sole purpose to raise the profile and effectiveness of each competency that directly affects the acceleration of organisational change.\n" +
          "\n" +
          "After years of working with some of the largest enterprises globally, we have found the most effective way to do real transformative change is by merging together business stakeholders and development teams and implementing a high-tech creative culture where new ideas are explored, refined and translated into real digital software.\n" +
          "\n" +
          "We hope to be able to share the full recording of Sarndeep’s talk as soon as possible. In the meantime, you can download a copy of Sarndeep’s presentation here. We have also created a infographic summary of Jen Thomson’s opening keynote which we hope provides insight into industry changes, trends and predictions.",
      },
    ]);
  });

  it(" check second Blog content", () => {
    const blogs2 = checkblog2();
    expect(blogs2).toEqual([
      {
        id: 2,
        snippet:
          "The most successful career switchers take years to learn new skills, network and prepare f...",
        title: "Milestones",
        author: "James",
        content:
          "The most successful career switchers take years to learn new skills, network and prepare financially. It also takes guts.\n" +
          "\n" +
          "Moving away from something you know inside and out to tread a new path can be a daunting experience. This is especially true if the new career path requires taking on a junior role and working back up the ranks – as it were.\n" +
          "\n" +
          "After building up a career and a specialism over a period of time, the thought of completely starting again can be discouraging. Not only does your wage often take a hit, it can need a whole new approach to go from a senior role to a flat team structure. Fortunately, Olwen Davies was not discouraged from pursuing new opportunities and now finds herself as a Delivery Consultant at ECS.\n" +
          "\n" +
          "Here is Olwen’s story.\n" +
          "\n" +
          "What got you into a tech career?\n" +
          "\n" +
          "“As an economic history graduate with dependents to support, it was a logical decision to seek a high skill role in a sector with resource shortages. We only had three computers in school, but my parents had been early tech adopters running their business, so I’d had an informal support/admin role as a teenager and thought I could learn technology. I was able to take an EU funded remote post-graduate computing conversion course, which allowed me to learn in the evenings when my children were asleep.” \n" +
          "\n" +
          "What was your first job in technology?\n" +
          "\n" +
          "“I started my career in technology working for the NHS as a data analyst. My responsibility was to merge and reconcile hospital data sets to compile research data. After 6 months they allowed me to work from home (which involved posting floppy disks to them!) This made working around childcare costs possible.\n" +
          "\n" +
          "I’d say that I had my lucky break after gaining my first ‘proper’ IT role post kids in 2000. I secured a job at Capital One Bank as an IT analyst after a 16-hour selection process. 16 hours! As you can expect from an established enterprise, this role provided security and great training. A highlight was coordinating a voluntary project which delivered a simple but much needed system for child abuse investigations and winning Business in the Community award, which was presented to us by Prince Charles.”\n" +
          "\n" +
          "What encouraged you to look for a new opportunity?\n" +
          "\n" +
          "“After 18 years into a varied IT career, and many companies down the line, I found myself as an Enterprise Test Manager with hands-on test automation skills. I also found myself suddenly attracting opportunities. I had moved between ‘big data’ analysis, data warehousing development, CRM, FX trading, consumer comparison and credit engines, web testing and eventually, after taking a career break to do a coding boot camp, I ended up in a Front-end development role in a world renown museum.\n" +
          "\n" +
          "But no matter which role I found myself in, I kept finding that repetitive manual checks dominated, and it was difficult to prioritise time for innovation. I was also getting frustrated at a lack of access to development resource which often blocked the automation of tests and routine tasks.\n" +
          "\n" +
          "When I was contacted by ECS, I recognised a genuine strategy to innovate, upskill and look for optimal ways to get quality and efficient systems in place. The recruiter told me about the Training Academy and spent time explaining that recruits had an opportunity to get the tech knowledge they wanted if they are willing to learn. Not only that, but this ring-fenced time would enhance my skills in both development and test automation for a career in DevOps.\n" +
          "\n" +
          "That was it. I was sold. Time dedicated to learning after years of feeling in a career rut. I decided to take the leap and joined ECS just a few months later. The fact this was a paid opportunity also helped with the move and to be honest, it was probably the best decision I’ve made for my career in tech.”\n" +
          "\n" +
          "How did you find out about the Academy?\n" +
          "\n" +
          "“Funnily enough, the Academy came to me! I was contacted directly by the ECS internal recruitment team via LinkedIn. I was impressed as Steven wrote a personal mail, explaining the reasons he thought I would be a good fit for the Digital Engineering team at ECS. I then went through the recruitment process and found myself on the team for an April start.\n" +
          "\n" +
          "Three-months later and I had built on my existing development, agile and testing knowledge, as well as gaining additional training in consulting and presentation skills – all of which has made the transition to a Digital Delivery Consultant an incredibly valuable journey.”",
      },
    ]);
  });

  it(" check third Blog content", () => {
    const blogs3 = checkblog3();
    expect(blogs3).toEqual([
      {
        id: 3,
        snippet:
          "module.\n" +
          "\n" +
          "Continuous learning has been a core value of ECS since the beginning. We believe ...",
        title: "Teaching code",
        author: "Mike",
        content:
          "module.\n" +
          "\n" +
          "Continuous learning has been a core value of ECS since the beginning. We believe in giving our consultants the time they need to upskill on current and emerging technologies, as well as familiarising themselves with the legacy technologies that still operate within IT ecosystems. Our vast number of emerging talent initiatives help extend the same invitation to budding tech enthusiasts who are keen to learn on the job.\n" +
          "\n" +
          "We also have colleagues that go above and beyond, volunteering time to help students outside of ECS take their first steps into the world of technology. Lucia Gore is one such individual. A full stack developer for ECS, Lucia has worked in various teams as a delivery consultant. Over her summer months this year, Lucia helped tutor students keen to learn some basic coding skills. Here is her experience.\n" +
          "\n" +
          "“In the last two weeks of August I was involved at Kozi, a residential course that provides a starting block for students who have not previously studied computer science but want to get an insight into the tech industry and learn to code. It was a thoroughly rewarding experience and I was so inspired by the levels of enthusiasm of the students and the positivity of the course as a whole.\n" +
          "\n" +
          "Students were aged 18-23 and ranged from school leavers to university leavers – none of whom had studied computer science at a higher level than A Level, or practiced JavaScript before. The idea of the course was to inspire those who had previously no technical knowledge, to consider a career in technology – in any capacity. Since it was just a starter course, students would need to move onto a more intensive course or internship once complete, to progress to a level at which they could become junior developers.\n" +
          "\n" +
          "I personally learnt to code at Makers Academy in London, which was fantastic, but a huge commitment both financially and in the length of time I had to commit to the process of learning. A 4-month bootcamp, with no prior professional experience in tech, is hard for many people to justify. This 5-day beginners’ course on the other hand, whilst intensive, felt like a middle ground for many students who may be intimidated by the idea of a full-time course. It is about 1/10 of the price of a regular bootcamp and therefore much more manageable from a financial perspective.\n" +
          "\n" +
          "With only 10 per intake, the atmosphere is intimate and laid back, and the pace of learning is fast (6 hours of lessons a day) but given the small classes and hands on approach, nobody was out of their depth. It definitely would have been something I would have wanted to do before I started at Makers, hence why I was very keen to be involved when it was put to me to help out with the lessons!\n" +
          "\n" +
          "Over the week, students learnt the basics of JavaScript, HTML and CSS. I was not the head coach but assisted the teaching and the hosting, and if anyone was finding things hard to grasp, or needed extra attention, I was able to give them a hand. By the end of the week, students were able to create a simple website with basic functionality, which they had fully styled. They had started out having never seen a page of code, and by the end could read JavaScript well, understood loops, functions, if else statements, and all of the tags and styling to go with it. There were several poker games created, a few quiz websites, and a handful of blogs. The satisfaction and pride that was evident from the students was brilliant to see and the pastoral aspects of the course definitely added to the experience too.\n" +
          "\n" +
          "Since the course was residential, the students stayed onsite, and each evening there were lovely home cooked dinners, card games, movie nights, tennis matches. It felt like they were on a learning holiday – a great way to get their brains back in gear before heading back to university, and a wonderful time for them to make new friends and learn a new skill in such a friendly and safe environment. Many of them are interested in internships and apprenticeships and would now be in a great place to apply for these, confident in their new skills. An added bonus was the fact that on the second week, it was all girls. I loved being part of their first step towards a career in tech, whether as a developer or whether they would just use the skills they’ve learnt to better their chances in applying for a different role, it was hugely inspiring and great fun too.\n" +
          "\n" +
          "Being small scale, and largely local to the area in which I grew up in, the course does not really advertise much outside of the local area, but I’m sure that if any clients/colleagues know of enthusiastic 18-23 year olds who might like to be involved in future courses then I would be delighted to put them in touch with the organisers who can take it from there.”",
      },
    ]);
  });
});
