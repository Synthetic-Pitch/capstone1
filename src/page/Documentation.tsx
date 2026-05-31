import { Download, FileText, ExternalLink } from "lucide-react";
import { type MouseEvent, useCallback, useEffect } from "react";
import { ScrollSmoother } from "gsap/all";
import Navbar from "../components/Navbar";

const manuscriptUrl = new URL(
  "../assets/docs/FINAL-MANUSCRIPT.docx",
  import.meta.url
).href;

type DocumentationSection = {
  id: string;
  title: string;
  eyebrow?: string;
  paragraphs: string[];
  points?: string[];
};

const sections: DocumentationSection[] = [
  {
    id: "overview",
    eyebrow: "Abstract",
    title:
      "A Web-Based System for Online Traffic Violation Payment, Document Submission, and Digital Record Management in Marikina City",
    paragraphs: [
      "Traffic violations in Marikina City are currently managed through manual processes that can cause slow transactions, long lines, and heavier workloads for traffic management staff. This study proposes a web-based system for traffic violation payment, document submission, and digital record management.",
      "The platform aims to streamline transactions, allow secure document uploads, and centralize violation records. It is designed to reduce processing time, minimize manual errors, and give motorists and staff easier access to violation information.",
    ],
    points: [
      "Web application for traffic violation management",
      "Online payment and document submission",
      "Centralized digital records for motorists and administrators",
      "Improved transparency, efficiency, and accessibility",
    ],
  },
  {
    id: "introduction",
    eyebrow: "Chapter I",
    title: "Introduction",
    paragraphs: [
      "Traffic management and violation processing are important for maintaining order in urban areas. Many local government units still rely on manual procedures, which can lead to delays, paperwork, long queues, and increased workload for personnel.",
      "The proposed system supports violation payments, document submission, and digital record management. It is intended to improve convenience for motorists while helping traffic management personnel handle records more efficiently.",
    ],
    points: [
      "Provide an online payment feature for traffic violation fines",
      "Allow motorists to upload required documents such as IDs, receipts, and supporting files",
      "Develop a centralized database for storing and retrieving violation records",
      "Reduce errors in recording, updating, and tracking traffic violation information",
    ],
  },
  {
    id: "scope",
    title: "Scope and Limitations",
    paragraphs: [
      "The study focuses on designing and analyzing a web-based system for digital records, document submission, and online payments for traffic violations in Marikina City. The target users include motorists, traffic enforcers, and administrators.",
      "Under Capstone Research 1, the study is limited to system analysis and design. It does not cover full deployment or integration with national government databases or third-party payment systems.",
    ],
  },
  {
    id: "related-work",
    eyebrow: "Chapter II",
    title: "Related Work",
    paragraphs: [
      "Existing web-based public service systems show that digitizing traffic violation processing can reduce manual workload, improve record accuracy, and simplify enforcement and payment procedures.",
      "Several platforms, such as e-challan systems and government digital service initiatives, provide violation checking and payment features. However, many of them lack complete integration of online payment, secure document submission, and centralized record management in one local-government-focused system.",
    ],
    points: [
      "Manual payment and scattered records remain common issues",
      "Some digital systems support payment but not document uploads",
      "Real-time integration between payments, documents, and records is limited",
      "Marikina City needs a practical solution built around local workflows",
    ],
  },
  {
    id: "methodology",
    eyebrow: "Chapter III",
    title: "Methodology",
    paragraphs: [
      "The study uses a developmental and design-focused research approach. It involves creating, developing, and evaluating a web-based system that addresses slow transactions, long queues, and manual record handling.",
      "The proposed system lets motorists view violations, submit documents, and pay fines remotely. For staff, it provides tools for managing violation records, verifying documents, monitoring payments, and generating reports.",
    ],
    points: [
      "Motorists can view violations, pay fines, and submit requirements online",
      "Traffic enforcers can record violations and verify submitted documents",
      "Administrators can manage accounts, records, and reports",
      "The system considers security, usability, reliability, and compliance with data privacy requirements",
    ],
  },
  {
    id: "features",
    eyebrow: "Chapter IV",
    title: "Results and Discussion",
    paragraphs: [
      "The system includes a login and verification feature where motorists enter their registered plate number to check for violation records. If a match is found, the system displays the related violation details. If no record exists, it shows a no-record message.",
      "The payment feature displays vehicle information, driver information, violation details, transaction status, and total amount to be paid before allowing the user to proceed with payment.",
      "The document submission feature allows motorists to upload requirements such as a driver's license, valid ID, and Ordinance Violation Receipt through a structured upload interface.",
    ],
    points: [
      "Plate number verification against database records",
      "Violation details, date, location, and amount display",
      "Digital payment workflow for traffic fines",
      "Secure upload and organization of required documents",
    ],
  },
  {
    id: "testing",
    title: "Testing and Evaluation",
    paragraphs: [
      "Functional testing showed that the login verification, payment display, fee computation, and document upload features performed their intended functions. Integration testing confirmed that records, payments, and uploaded documents were properly connected.",
      "User testing indicated that the system was easy to understand and improved convenience compared to traditional manual processes. Performance testing showed fast loading, accurate retrieval, and stable behavior under normal conditions.",
    ],
    points: [
      "Functionality: core features operated as expected",
      "Usability: respondents found the interface clear and simple",
      "Reliability: the system performed consistently during testing",
      "Efficiency: the workflow reduced manual inquiries and physical documentation",
    ],
  },
  {
    id: "data",
    eyebrow: "Chapter V",
    title: "Data Preparation and Cleaning",
    paragraphs: [
      "Data wrangling and formatting were performed to keep traffic violation records consistent, accurate, and suitable for system processing. This included standardizing text capitalization, unifying date formats, and converting fee values into numeric format.",
      "Missing values were handled by replacing unavailable transaction statuses with Pending, using Unknown for missing violation details, and ensuring records remained complete enough for reliable processing.",
    ],
    points: [
      "Standardized names, locations, and text values",
      "Unified dates into YYYY-MM-DD format",
      "Converted violation fees into numeric values",
      "Organized records into structured relational tables",
    ],
  },
  {
    id: "appendices",
    title: "Appendices",
    paragraphs: [
      "The manuscript includes interview questions, request letters, system interface screenshots, data gathering details, ethical considerations, and a project timeline from December 21, 2025 to June 4, 2026.",
      "The data gathering process used interviews and informal surveys with motorists, traffic enforcement personnel, and system end-users to identify problems in the current manual traffic violation process.",
    ],
    points: [
      "Manual processing causes delays and inconvenience",
      "Motorists need easier access to violation records",
      "In-person transactions create long queues and staff workload",
      "A centralized digital system can improve efficiency and transparency",
    ],
  },
];

const references = [
  "A. Pranshu, S. K. Ijju, and S. P. Swarnalatha, E-Challan: Online Traffic Rules Violation Penalty and Management System, International Journal of Computer Applications, 2020.",
  "S. Srikanth, A. Sadaria, H. Bhatia, K. Gupta, P. Jain, and P. K. Kumaraguru, Don't cross that stop line: Characterizing traffic violations in metropolitan cities, arXiv, 2019.",
  "J. A. C. Jose et al., Artificial intelligence software application for contactless traffic violation apprehension in the Philippines, 2021.",
  "Philippine Information Agency, MMDA traffic systems to integrate with eGovPH Super App for online violations, payments, 2026.",
  "Philippine Information Agency, NCAP's May HuliKa gets new features for motorists' convenience, 2025.",
  "Presidential Communications Office, Motorists can check traffic violations via eGovPH - DICT, 2025.",
];

const Documentation = () => {
  const scrollToSection = useCallback((id: string, smooth = false) => {
    const section = document.getElementById(id);

    if (!section) return;

    const smoother = ScrollSmoother.get();
    const offset = window.innerWidth >= 668 ? "top 24px" : "top 16px";

    if (smoother) {
      smoother.refresh(false, true);
      smoother.scrollTo(section, smooth, offset);
      return;
    }

    section.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "start",
    });
  }, []);

  useEffect(() => {
    let rafId = 0;
    let resizeTimer: ReturnType<typeof setTimeout>;

    const refreshAndKeepHash = (smooth = false) => {
      window.cancelAnimationFrame(rafId);

      rafId = window.requestAnimationFrame(() => {
        ScrollSmoother.get()?.refresh(false, true);

        const hashId = window.location.hash.replace("#", "");
        if (hashId) {
          scrollToSection(decodeURIComponent(hashId), smooth);
        }
      });
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => refreshAndKeepHash(false), 120);
    };

    const handleHashChange = () => refreshAndKeepHash(true);

    refreshAndKeepHash(false);
    window.addEventListener("resize", handleResize);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("hashchange", handleHashChange);
      ScrollSmoother.get()?.refresh(false, true);
    };
  }, [scrollToSection]);

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    window.history.pushState(null, "", `#${id}`);
    scrollToSection(id, true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f7fb] text-[#172033]">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 tablet:px-8 desktop:grid desktop:grid-cols-[280px_1fr] desktop:gap-8 desktop:py-10">
        <aside className="desktop:sticky desktop:top-6 desktop:h-fit">
          <div className="rounded-lg border border-[#d8e1ee] bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3 border-b border-[#e6edf5] pb-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[#1f6f8b] text-white">
                <FileText size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6b7c93]">
                  Manuscript
                </p>
                <h1 className="mt-1 text-xl font-bold leading-tight text-[#172033]">
                  Documentation
                </h1>
              </div>
            </div>

            <nav className="mt-4 grid gap-1 text-sm">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(event) => handleSectionClick(event, section.id)}
                  className="rounded-md px-3 py-2 font-medium text-[#4c5f76] transition hover:bg-[#eaf3f6] hover:text-[#1f6f8b]"
                >
                  {section.title}
                </a>
              ))}
            </nav>

            <div className="mt-5 grid gap-2">
              <a
                href={manuscriptUrl}
                download
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#1f6f8b] px-4 text-sm font-semibold text-white transition hover:bg-[#185b72]"
              >
                <Download size={18} />
                Download DOCX
              </a>
              <a
                href={manuscriptUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#bfd2df] bg-white px-4 text-sm font-semibold text-[#1f6f8b] transition hover:bg-[#eaf3f6]"
              >
                <ExternalLink size={18} />
                Open File
              </a>
            </div>
          </div>
        </aside>

        <section className="flex flex-col gap-5">
          <div className="rounded-lg border border-[#d8e1ee] bg-white p-5 shadow-sm tablet:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f6f8b]">
              Capstone Documentation
            </p>
            <h2 className="mt-3 max-w-4xl text-2xl font-bold leading-tight text-[#172033] tablet:text-4xl">
              Online Traffic Violation Payment, Document Submission, and
              Digital Record Management in Marikina City
            </h2>
            <div className="mt-5 grid gap-3 text-sm font-medium text-[#5f6f84] tablet:grid-cols-3">
              <span className="rounded-md bg-[#eef4f8] px-3 py-2">
                BSIT Capstone Project
              </span>
              <span className="rounded-md bg-[#eef4f8] px-3 py-2">
                ICCT Colleges Philippines
              </span>
              <span className="rounded-md bg-[#eef4f8] px-3 py-2">
                Adviser: Jerico M. Vilog
              </span>
            </div>
          </div>

          {sections.map((section) => (
            <article
              id={section.id}
              key={section.id}
              className="scroll-mt-6 rounded-lg border border-[#d8e1ee] bg-white p-5 shadow-sm tablet:p-8"
            >
              {section.eyebrow && (
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f8b]">
                  {section.eyebrow}
                </p>
              )}
              <h3 className="mt-1 text-2xl font-bold leading-tight text-[#172033]">
                {section.title}
              </h3>
              <div className="mt-4 grid gap-4 text-base leading-8 text-[#3d4b5f]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.points && (
                <ul className="mt-5 grid gap-3 tablet:grid-cols-2">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-md border border-[#dce7ef] bg-[#f7fafc] px-4 py-3 text-sm font-medium leading-6 text-[#405167]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <article className="rounded-lg border border-[#d8e1ee] bg-white p-5 shadow-sm tablet:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f8b]">
              References
            </p>
            <h3 className="mt-1 text-2xl font-bold text-[#172033]">
              Sources Cited in the Manuscript
            </h3>
            <ol className="mt-5 grid gap-3 text-sm leading-7 text-[#3d4b5f]">
              {references.map((reference) => (
                <li
                  key={reference}
                  className="rounded-md border border-[#dce7ef] bg-[#f7fafc] px-4 py-3"
                >
                  {reference}
                </li>
              ))}
            </ol>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Documentation;
