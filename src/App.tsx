import React from "react";
import "./App.scss";

import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Section title="creating a new repository">
        to initialize a git repository inside a folder run <br />
        <code>git init</code> <br />
        to connect your local repository with a remote repository run <br />
        <code>git remote add origin &lt;remote-repo-url&gt;</code>
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

      <Section title="push">
        to push your code to the remote repository you need to run <br />
        <code>git push -u origin master</code> <br />
        this assumes that you're pushing to the master branch the next time you
        push your code you only need to run <br />
        <code>git push</code> <br />
        <br />
        the <code>-u</code> tag sets the default branch to whatever you choose
        <br />
        if you want to push your code to a different branch you can do <br />
        <code>git push -u origin &lt;branch&gt;</code>
        <br />
        note: <code>-u</code> and <code>--set-upstream</code> do the same thing
      </Section>
    </div>
  );
}

export default App;
