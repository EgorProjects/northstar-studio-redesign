import type { Project } from '@/types/content'

export function ProjectArt({ project }: { project: Project }) {
  return (
    <div className={`project-art art-${project.preview}`} aria-hidden="true">
      {project.preview === 'orbital' ? (
        <><div className="orbital-ring ring-one" /><div className="orbital-ring ring-two" /><div className="orbital-core">O</div><span className="art-caption">MOVE WITH<br />PURPOSE</span></>
      ) : null}
      {project.preview === 'morrow' ? (
        <><span className="morrow-symbol">m.</span><span className="morrow-word">morrow<br /><small>GOODS FOR LIVING</small></span><div className="morrow-sun" /></>
      ) : null}
      {project.preview === 'form' ? (
        <><div className="form-block block-one" /><div className="form-block block-two" /><span className="form-word">FORM<br /><i>&</i> FIELD</span><span className="form-number">ARCHITECTURE / 001</span></>
      ) : null}
      {project.preview === 'flora' ? (
        <><div className="flora-leaf leaf-one" /><div className="flora-leaf leaf-two" /><div className="flora-jar"><span>FLORA<br />LAB</span></div><span className="flora-caption">GROW INTO<br />YOUR SKIN</span></>
      ) : null}
    </div>
  )
}
