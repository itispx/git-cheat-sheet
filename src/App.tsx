import React, { useState, useEffect } from "react";
import "./App.scss";

import translations from "./translations";

import Section from "./components/Section/Section";
import Code from "./components/Code/Code";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "pt_BR">("en");

  const [t, setT] = useState(translations[language]);

  useEffect(() => {
    document.title = translations[language].document_title;
    setT(translations[language]);
  }, [language]);

  return (
    <div className="app">
      <Section id={0} title={t.presentation_title}>
        {t.presentation_desc} <br />
        <br />
        {t.by}{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/itispx">
          Px
        </a>
        <br />
        <br />
        <h4 onClick={() => setLanguage("en")}>{translations.en.language}</h4>
        {" | "}
        <h4 onClick={() => setLanguage("pt_BR")}>{translations.pt_BR.language}</h4>
        <br />
        <br />
        <br />
        {t.report_issues}{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/itispx/git-cheat-sheet/issues"
        >
          GitHub
        </a>
      </Section>

      <Section id={1} title={t.init_title}>
        {t.init_repo}
        <Code>git init</Code>
      </Section>

      <Section id={2} title={t.remote_title}>
        {t.remote_connect}
        <Code>git remote add origin &lt;remote-repo-url&gt;</Code>
        {t.remote_disconnect}
        <Code>git remote rm origin</Code>
      </Section>

      <Section id={3} title={t.clone_repo_title}>
        {t.clone_local_repo}
        <Code>git clone /path/to/repo</Code>
        {t.clone_remote_repo}
        <Code>git clone &lt;url&gt;</Code>
        {t.clone_remote_repo_gh_cli}
        <Code>gh repo clone &lt;username&gt;/&lt;repository&gt;</Code>
      </Section>

      <Section id={4} title={t.staging_title}>
        {t.staging_file}
        <Code>git add &lt;file&gt;</Code>
        {t.staging_all}
        <Code>git add .</Code>
        {/* TODO unstage  */}
        {t.staging_commit}
        <Code>git commit -m "descriptive commit message"</Code>
      </Section>

      <Section id={5} title={t.push_title}>
        {t.push_to_remote}
        <Code>git push -u origin master</Code>
        {t.push_to_remote_desc}
        {t.git_push}
        <Code>git push</Code>
        <br />
        {t.u_note_1} <Code inline>-u</Code> {t.u_note_2}
        <br />
        {t.push_different_branch}
        <Code>git push -u origin &lt;branch&gt;</Code>
        <br />
        {t.note} <Code inline>-u</Code> {t.set_upstream_note_1}{" "}
        <Code inline>--set-upstream</Code> {t.set_upstream_note_2}
      </Section>

      <Section id={6} title={t.pull_title}>
        {t.pull_repo}
        <Code>git pull</Code>
        {t.pull_branch}
        <Code>git fetch origin</Code>
        <Code inline>git branch -f &lt;branch-name&gt; origin/&lt;branch-name&gt;</Code>
        <Code>git checkout &lt;branch-name&gt;</Code>
      </Section>

      <Section id={7} title={t.branch_title}>
        {t.branch_create}
        <Code>git branch &lt;branch&gt;</Code>
        {t.branch_switch}
        <Code>git checkout &lt;branch&gt;</Code>
        {t.branch_create_switch}
        <Code>git checkout -b &lt;branch&gt;</Code>
        {t.branch_create_switch_desc} <br />
        {t.branch_create_switch_rem}
        <Code>git push -u origin &lt;branch&gt;</Code>
      </Section>

      <Section id={8} title={t.merge_title}>
        {t.merge_to_active}
        <Code>git merge &lt;branch&gt;</Code>
        {t.merge_conflict_1}
        <Code>git add</Code>
        {t.merge_conflict_2} <br />
        <br />
        {t.merge_diff}
        <Code>git diff &lt;source-branch&gt; &lt;target-branch&gt;</Code>
      </Section>

      <Section id={9} title={t.mv_title}>
        {t.mv_desc}
        <Code>git mv &lt;old-path&gt; &lt;new-path&gt;</Code>
        {t.mv_desc_2}
        <Code>git mv &lt;old-name&gt; &lt;new-name&gt;</Code>
      </Section>
    </div>
  );
};

export default App;
