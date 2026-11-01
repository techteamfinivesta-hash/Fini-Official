import '../Media/Tenure25.css';

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Team member data
const teamMembers = [
  // Leads
  {
    section: "Board",
    members: [
        {
        name: "Sanskriti Vidushi",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827769/creative_nishtha_4_mxpdqp.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827769/creative_nishtha_4_mxpdqp.png',
        linkedin: "https://www.linkedin.com/in/sanskritividushi/",
        instagram: "https://www.instagram.com/sanskritividushi/"
      },

      {
        name: "Abhaya Trivedi",
        img:'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827774/creative_nishtha_fqkjiv.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827774/creative_nishtha_fqkjiv.png',
        linkedin: "https://www.linkedin.com/in/abhayatrivedi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/abbhayaaa/"
      },
      {
        name: "Harshita Soni",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827757/creative_nishtha_2_yqui9f.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827757/creative_nishtha_2_yqui9f.png',
        linkedin: "https://www.linkedin.com/in/harshita-soni-414005286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/harshita_soni.15/"
      },
      {
        name: "Aanvi Gupta",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827757/creative_nishtha_3_cpaj2f.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827757/creative_nishtha_3_cpaj2f.png',
        linkedin: "https://www.linkedin.com/in/aanvig",
        instagram: "https://www.instagram.com/aanvig_/"
      },
      {
        name: "Mishthi Kainthola",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827762/creative_nishtha_5_qtpqav.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827762/creative_nishtha_5_qtpqav.png',
        linkedin: "https://www.linkedin.com/in/mishthi-kainthola-206854288?",
        instagram: "https://www.instagram.com/thepahadipunjaban/"
      },
      {
        name: "Khushi Khorwal",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827764/creative_nishtha_6_bghzop.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827764/creative_nishtha_6_bghzop.png',
        linkedin: "https://www.linkedin.com/in/khushi-khorwal-4a956a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/khushikhorwal24/"
      },
      {
        name: "Anshika Patra",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827771/creative_nishtha_8_fqvooj.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827771/creative_nishtha_8_fqvooj.png',
        linkedin: "https://www.linkedin.com/in/anshika-patra-b67a52291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/p._.anshika/"
      },
      {
        name: "Urvashi Yadav",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827768/creative_nishtha_7_h1rz4o.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756827768/creative_nishtha_7_h1rz4o.png',
        linkedin: "http://linkedin.com/in/urvashiyadav2004",
        instagram: "https://www.instagram.com/urvashi2004/"
      }
      
    ]
  },

  // Heads
  {
    section: "Cores",
    members: [
      {
        name: "Arni Goyal",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753678/content-arni_hmygd9.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753678/content-arni_hmygd9.png',
        linkedin: "https://www.linkedin.com/in/arni-goyal-b2639b321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/arni_1408/"
    },
      {
        name: "Sakshi",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753679/content-sakshi_znhnsu.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753679/content-sakshi_znhnsu.png',
        linkedin: "https://www.linkedin.com/in/sakshi-yadav-ab0b11331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/sakshiyadav.png/"
      },
      {
        name: "Anandi Sharma",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753958/hr-anandi_pgyuvo.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753958/hr-anandi_pgyuvo.png',
        linkedin: "https://www.linkedin.com/in/anandi-sharma-984435289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/anandisharma0109/"
      },
      {
        name: "Pavneet Kaur",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753961/hr-pavneet_xzapjc.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753961/hr-pavneet_xzapjc.png',
        linkedin: "https://www.linkedin.com/in/pavneet-kaur-29487921a",
        instagram: "https://www.instagram.com/pvneeeet/"
      },
      {
        name: "Sia Jain",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753957/fnr-sia_mq9ju0.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753957/fnr-sia_mq9ju0.png',
        linkedin: "https://www.linkedin.com/in/sia-jain-88922a323",
        instagram: "https://www.instagram.com/sia.jain29/"
      },
      {
        name: "Diya Hansaria",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753939/fnr-diya_wekpcd.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753939/fnr-diya_wekpcd.png',
        linkedin: "http://www.linkedin.com/in/diya-hansaria-16b484280",
        instagram: "https://www.instagram.com/diyahansaria2005/"
      },
      {
        name: "Harshita Bhalla",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753865/fc-harshita_lsvxuq.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753865/fc-harshita_lsvxuq.png',
        linkedin: "https://www.linkedin.com/in/harshita-bhalla-02a5b4323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/_harshitabhalla_/"
      },
      {
        name: "Parul Varandani",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753867/fc-parul_hvlk3e.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753867/fc-parul_hvlk3e.png',
        linkedin: "https://www.linkedin.com/in/parul-varandani-b0b542343/",
        instagram: "https://www.instagram.com/parulvarandani/"
      },
      {
        name: "Mahi Arora",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753551/tech-mahi_eprokc.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753551/tech-mahi_eprokc.png',
        linkedin: "https://www.linkedin.com/in/mahi-arora-b0a92a322/",
        instagram: "https://www.instagram.com/mahii_yt/"
      },
      {
        name: "Ruzal Singla",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753551/ruzal-tech_e0lrud.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753551/ruzal-tech_e0lrud.png',
        linkedin: "http://www.linkedin.com/in/ruzal-singla-a05861324",
        instagram: "https://www.instagram.com/__.ruzal.__/"
    },
      {
        name: "Nishtha",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753682/creative_nishtha_ja9gmm.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753682/creative_nishtha_ja9gmm.png',
        linkedin: "http://www.linkedin.com/in/nishtha2006",
        instagram: "https://www.instagram.com/nishthaaw/"
      },
      {
        name: "Lishika Marwah",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753680/creative_lishika_nqevfz.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753680/creative_lishika_nqevfz.png',
        linkedin: "http://www.linkedin.com/in/lishikamarwah",
        instagram: "https://www.instagram.com/lishikam964/"
      },
      {
        name: "Nisha",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756754076/media-nisha_ngxowi.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756754076/media-nisha_ngxowi.png',
        linkedin: "https://www.linkedin.com/in/nisha-rani-7609b02a8/",
        instagram: "https://www.instagram.com/_nishaaax_/"
      },
      {
        name: "Aditi",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756754076/media-aditi_guy43s.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756754076/media-aditi_guy43s.png',
        linkedin: "https://www.linkedin.com/in/aditikumar161",
        instagram: "https://www.instagram.com/aditizy/"
      },
      {
        name: "Aafia Iqbal",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756754155/pr-aafia_rvxhib.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756754155/pr-aafia_rvxhib.png',
        linkedin: "https://www.linkedin.com/in/aafia-iqbal/",
        instagram: "https://www.instagram.com/aafia__iqbal__/"
      },
      {
        name: "Bhakti Dhupar",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756754158/pr-bhakti_qepfmf.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756754158/pr-bhakti_qepfmf.png',
        linkedin: "https://www.linkedin.com/in/bhakti-dhupar-aaa8932a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/_bhakti06/"
      },{
        name: "Krati Mishra",
        img: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753550/sponsi-krati_seydyb.png',
        imgOL: 'https://res.cloudinary.com/dtoiqexe1/image/upload/v1756753550/sponsi-krati_seydyb.png',
        linkedin: "https://www.linkedin.com/in/krati-mishra",
        instagram: "https://www.instagram.com/_krrati_/"
      }
    ]
  }
];

const Team25 = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
    Aos.refresh(); // Refresh AOS to apply animations
  }, []);

  return (
    <div>
      <section className="cores">
        {teamMembers.map((section, idx) => (
          <div key={idx}>
            <h2 data-aos="fade-up">{section.section}</h2>
            <div className="cores-photo">
              {section.members.map((member, i) => (
                <div className="team25-photo" data-aos="fade-up" key={i}>
                  <img src={member.img} loading="lazy" alt={member.name} className="team25-image" />
                  <img src={member.imgOL} loading="lazy" alt={member.name + " Back"} className="team25-image-anim" />
                  <div className="overlay25">
                    {member.linkedin && (
                      <a href={member.linkedin} className="team25-icons" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} className="team25-icons" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Team25;