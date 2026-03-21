import Image from "next/image";
import { profile } from "@/data/site";

export default function Hero() {
  return (
    <div>
      {/* Avatar */}
      <div className="w-32 h-32 md:w-[296px] md:h-[296px] rounded-full overflow-hidden border-2 border-border mb-4 mx-auto md:mx-0">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={296}
          height={296}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Name & username */}
      <div className="mb-4 text-center md:text-left">
        <h1 className="text-xl md:text-[24px] font-semibold leading-tight text-foreground">
          {profile.name}
        </h1>
        <p className="text-base md:text-[20px] font-light text-muted leading-tight">
          {profile.username}
        </p>
      </div>

      {/* Bio */}
      <p className="text-sm text-foreground mb-4 text-center md:text-left">
        {profile.bio}
      </p>

      <button className="w-full py-[5px] px-4 text-sm font-medium rounded-md border border-border bg-surface hover:bg-surface-hover text-foreground transition-colors mb-4">
        Available for hire
      </button>

      {/* Meta info */}
      <ul className="text-sm text-foreground space-y-1 mb-4">
        {profile.organization && (
        <li className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted shrink-0">
            <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4.001 4.001 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a.75.75 0 1 0 0 1.5 1.5 1.5 0 0 1 .666 2.844.75.75 0 0 0-.416.672v.352a.75.75 0 0 0 .574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 1 0 1.434-.44 5.01 5.01 0 0 0-2.56-3.012A3 3 0 0 0 11 4Z" />
          </svg>
          <span className="text-muted">{profile.organization}</span>
        </li>
        )}
        {profile.location && (
        <li className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted shrink-0">
            <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192 0ZM8 1a5 5 0 0 0-3.536 8.536l3.536 3.536 3.536-3.536A5 5 0 0 0 8 1Zm0 3a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 4Z" />
          </svg>
          <span>{profile.location}</span>
        </li>
        )}
        <li className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted shrink-0">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z" />
          </svg>
          <a href={`mailto:${profile.email}`} className="text-accent hover:underline truncate">
            {profile.email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted shrink-0">
            <path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25Zm-.025 5.475a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 1 1-2.83-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25Z" />
          </svg>
          <a href={profile.linkedin} target="_blank" rel="noopener" className="text-accent hover:underline truncate">
            linkedin.com/in/{profile.username}
          </a>
        </li>
        {profile.instagram && (
        <li className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted shrink-0">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
          <a href={profile.instagram} target="_blank" rel="noopener" className="text-accent hover:underline truncate">
            Instagram
          </a>
        </li>
        )}
      </ul>

      {/* Highlights */}
      <div className="border-t border-border pt-4">
        <h2 className="text-sm font-semibold text-foreground mb-2">Highlights</h2>
        <ul className="text-sm space-y-1.5">
          {profile.highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-muted">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-[#eac54f] shrink-0">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
