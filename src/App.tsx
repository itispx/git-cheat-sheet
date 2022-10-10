import React from "react";
import "./App.scss";

import t from "./translations";

import Section from "./components/Section/Section";
import Code from "./components/Code/Code";

const App: React.FC = () => {
  return (
    <div className="App">
      <Section id={0} title={t.init_title}>
        {t.init_repo} <br />
        <Code>git init</Code>
        {t.connect_repo_remote} <br />
        <Code>git remote add origin &lt;remote-repo-url&gt;</Code>
      </Section>

      <Section id={1} title={t.clone_repo_title}>
        {t.clone_local_repo} <br />
        <Code>git clone /path/to/repo</Code>
        {t.clone_remote_repo} <br />
        <Code>git clone &lt;url&gt;</Code>
        {t.clone_remote_repo_gh_cli} <br />
        <Code>gh repo clone &lt;username&gt;/&lt;repository&gt;</Code>
      </Section>

      <Section id={2} title={t.staging_title}>
        {t.staging_file} <br />
        <Code>git add &lt;file&gt;</Code>
        {t.staging_all} <br />
        <Code>git add .</Code>
        {/* TODO unstage  */}
        {t.staging_commit} <br />
        <Code>git commit -m "descriptive commit message"</Code>
      </Section>

      <Section id={3} title={t.push_title}>
        {t.push_to_remote} <br />
        <Code>git push -u origin master</Code>
        {t.push_to_remote_desc} <br />
        {t.git_push} <br />
        <Code>git push</Code>
        <br />
        {t.u_note_1} <Code inline>-u</Code> {t.u_note_2}
        <br />
        {t.push_different_branch} <br />
        <Code>git push -u origin &lt;branch&gt;</Code>
        <br />
        {t.note} <Code inline>-u</Code> {t.set_upstream_note_1}{" "}
        <Code inline>--set-upstream</Code> {t.set_upstream_note_2}
      </Section>

      <Section id={4} title={t.pull_title}>
        {t.pull_repo} <br />
        <Code>git pull</Code>
      </Section>

      <Section id={5} title={t.branch_title}>
        {t.branch_create} <br />
        <Code>git branch &lt;branch&gt;</Code>
        {t.branch_switch} <br />
        <Code>git checkout &lt;branch&gt;</Code>
        <br />
        {t.branch_create_switch} <br />
        <Code>git checkout -b &lt;branch&gt;</Code>
        {t.branch_create_switch_desc} <br />
        <br />
        {t.branch_create_switch_rem}
        <br />
        <Code>git push -u origin &lt;branch&gt;</Code>
      </Section>

      <Section id={6} title={t.merge_title}>
        {t.merge_to_active} <br />
        <Code>git merge &lt;branch&gt;</Code>
        {t.merge_conflict_1}
        <br />
        <Code>git add</Code>
        {t.merge_conflict_2} <br />
        <br />
        {t.merge_diff}
        <br />
        <Code>git diff &lt;source-branch&gt; &lt;target-branch&gt;</Code>
      </Section>
    </div>
  );
};

export default App;
