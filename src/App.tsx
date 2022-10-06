import React from "react";
import "./App.scss";

import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Section title="creating a new repository">
        to initialize a git repository inside a folder run <br />
        <code>git init</code> <br />
        and you're all set
      </Section>

      <Section title="cloning a repository">
        to clone a local repository run <br />
        <code>git clone /path/to/repo</code>
        <br />
        to clone a remote repository run <br />
        <code>git clone &lt;url&gt;</code>
        <br />
        to clone a remote repository using the GitHub CLI
        <br />
        <code>gh repo clone &lt;username&gt;/&lt;repository&gt;</code>
      </Section>

      <Section title="staging (add) &amp; commit">
        after making changes to a file, you can stage those changes with <br />
        <code>git add &lt;file&gt;</code> <br />
        to stage all the changes you made in the current directory downwards,
        run <br />
        <code>git add .</code>
        {/* TODO unstage  */}
        to commit the files you just staged to your local repository run <br />
        <code>git commit -m "descriptive commit message"</code>
      </Section>
    </div>
  );
}

export default App;
