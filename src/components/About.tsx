import { profile, about } from "@/data/site";

export default function About() {
  return (
    <section>
      {/* README header */}
      <div className="flex items-center gap-2 mb-3">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted">
          <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z" />
        </svg>
        <h2 className="text-sm font-normal text-foreground">
          {profile.username} / <strong>README</strong>.md
        </h2>
      </div>

      {/* README content card */}
      <div className="border border-border rounded-md bg-background overflow-hidden">
        <div className="px-4 py-4 md:px-6 md:py-5 prose-sm">
          <h3 className="text-xl font-semibold text-foreground border-b border-border pb-3 mb-4">
            Hi there 👋
          </h3>

          {about.paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-sm text-foreground leading-relaxed mb-4"
              dangerouslySetInnerHTML={{
                __html: text.replace(
                  /\*\*(.*?)\*\*/g,
                  "<strong>$1</strong>"
                ),
              }}
            />
          ))}

          {/* Tech stack */}
          <h4 className="text-base font-semibold text-foreground border-b border-border pb-2 mb-3 mt-6">
            🛠️ Tech Stack
          </h4>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {about.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block text-xs bg-surface text-subtle px-2 py-0.5 rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Contact */}
          <h4 className="text-base font-semibold text-foreground border-b border-border pb-2 mb-3 mt-6">
            📫 Get in touch
          </h4>

          <ul className="text-sm text-foreground space-y-1 list-none">
            <li>
              Email: <a href={`mailto:${profile.email}`} className="text-accent hover:underline">{profile.email}</a>
            </li>
            <li>
              LinkedIn: <a href={profile.linkedin} target="_blank" rel="noopener" className="text-accent hover:underline">{profile.username}</a>
            </li>
            {profile.instagram && (
            <li>
              Instagram: <a href={profile.instagram} target="_blank" rel="noopener" className="text-accent hover:underline">@_.mohit_012</a>
            </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
