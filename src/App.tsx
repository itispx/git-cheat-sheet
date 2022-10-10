import React from "react";
import "./App.scss";

import Section from "./components/Section/Section";
import Code from "./components/Code/Code";

const App: React.FC = () => {
  return (
    <div className="App">
      <Section id={0} title="creating a new repository">
        to initialize a git repository inside a folder run <br />
        <Code>git init</Code>
        to connect your local repository with a remote repository run <br />
        <Code>git remote add origin &lt;remote-repo-url&gt;</Code>
      </Section>

      <Section id={1} title="cloning a repository">
        to clone a local repository run <br />
        <Code>git clone /path/to/repo</Code>
        to clone a remote repository run <br />
        <Code>git clone &lt;url&gt;</Code>
        to clone a remote repository using the GitHub CLI <br />
        <Code>gh repo clone &lt;username&gt;/&lt;repository&gt;</Code>
      </Section>

      <Section id={2} title="staging (add) &amp; commit">
        after making changes to a file, you can stage those changes with <br />
        <Code>git add &lt;file&gt;</Code>
        to stage all the changes you made in the current directory downwards, run <br />
        <Code>git add .</Code>
        {/* TODO unstage  */}
        to commit the files you just staged to your local repository run <br />
        <Code>git commit -m "descriptive commit message"</Code>
      </Section>

      <Section id={3} title="push">
        to push your Code to the remote repository you need to run <br />
        <Code>git push -u origin master</Code>
        this assumes that you're pushing to the master branch the next time you push your
        Code you only need to run <br />
        <Code>git push</Code>
        <br />
        the <Code inline>-u</Code> tag sets the default branch to whatever you choose
        <br />
        if you want to push your Code to a different branch you can do <br />
        <Code>git push -u origin &lt;branch&gt;</Code>
        <br />
        note: <Code inline>-u</Code> and <Code inline>--set-upstream</Code> do the same
        thing
      </Section>

      <Section id={4} title="pull">
        to bring the latest changes from the remote repository run <br />
        <Code>git pull</Code>
      </Section>

      <Section id={5} title="branching">
        to create a branch simply run <br />
        <Code>git branch &lt;branch&gt;</Code>
        to switch to the branch run <br />
        <Code>git checkout &lt;branch&gt;</Code>
        <br />
        a shorter way to this is to run <br />
        <Code>git checkout -b &lt;branch&gt;</Code>
        this will create the branch and switch you to it <br />
        <br />
        don't forget to push your branch to the remote repository so others can access it
        <br />
        <Code>git push -u origin &lt;branch&gt;</Code>
      </Section>

      <Section id={6} title="merge">
        to merge a branch to your current active branch run <br />
        <Code>git merge &lt;branch&gt;</Code>
        in the case of conflicts you'll need to manually resolve them and add them with
        <br />
        <Code>git add</Code>
        before merging the branches <br />
        <br />
        to preview the difference between the two merging branches you can use
        <br />
        <Code>git diff &lt;source-branch&gt; &lt;target-branch&gt;</Code>
      </Section>
    </div>
  );
};

export default App;
