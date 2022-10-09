import React from "react";
import "./App.scss";

import Section from "./components/Section";

const App: React.FC = () => {
  return (
    <div className="App">
      <Section id={0} title="creating a new repository">
        to initialize a git repository inside a folder run <br />
        <code>git init</code> <br />
        to connect your local repository with a remote repository run <br />
        <code>git remote add origin &lt;remote-repo-url&gt;</code>
      </Section>

      <Section id={1} title="cloning a repository">
        to clone a local repository run <br />
        <code>git clone /path/to/repo</code> <br />
        to clone a remote repository run <br />
        <code>git clone &lt;url&gt;</code> <br />
        to clone a remote repository using the GitHub CLI <br />
        <code>gh repo clone &lt;username&gt;/&lt;repository&gt;</code>
      </Section>

      <Section id={2} title="staging (add) &amp; commit">
        after making changes to a file, you can stage those changes with <br />
        <code>git add &lt;file&gt;</code> <br />
        to stage all the changes you made in the current directory downwards, run <br />
        <code>git add .</code> <br />
        {/* TODO unstage  */}
        to commit the files you just staged to your local repository run <br />
        <code>git commit -m "descriptive commit message"</code>
      </Section>

      <Section id={3} title="push">
        to push your code to the remote repository you need to run <br />
        <code>git push -u origin master</code> <br />
        this assumes that you're pushing to the master branch the next time you push your
        code you only need to run <br />
        <code>git push</code> <br />
        <br />
        the <code>-u</code> tag sets the default branch to whatever you choose
        <br />
        if you want to push your code to a different branch you can do <br />
        <code>git push -u origin &lt;branch&gt;</code> <br />
        <br />
        note: <code>-u</code> and <code>--set-upstream</code> do the same thing
      </Section>

      <Section id={4} title="pull">
        to bring the latest changes from the remote repository run <br />
        <code>git pull</code>
      </Section>

      <Section id={5} title="branching">
        to create a branch simply run <br />
        <code>git branch &lt;branch&gt;</code> <br />
        to switch to the branch run <br />
        <code>git checkout &lt;branch&gt;</code> <br />
        <br />
        a shorter way to this is to run <br />
        <code>git checkout -b &lt;branch&gt;</code> <br />
        this will create the branch and switch you to it <br />
        <br />
        don't forget to push your branch to the remote repository so others can access it
        <br />
        <code>git push -u origin &lt;branch&gt;</code>
      </Section>

      <Section id={6} title="merge">
        to merge a branch to your current active branch run <br />
        <code>git merge &lt;branch&gt;</code> <br />
        in the case of conflicts you'll need to manually resolve them and add them with
        <br />
        <code>git add</code> <br />
        before merging the branches <br />
        <br />
        to preview the difference between the two merging branches you can use
        <br />
        <code>git diff &lt;source-branch&gt; &lt;target-branch&gt;</code>
      </Section>
    </div>
  );
};

export default App;
