import TabBar from "./TabBar";

const Editor = ({ text, callback }) => {
  return (
    <div className="flex flex-col w-1/2 h-full">
      <TabBar title={"Editor"} />
      <textarea
        value={text}
        onChange={callback}
        type="textarea"
        id="editor"
        className="w-full h-full font-mono border grow"
      ></textarea>
    </div>
  );
};

export default Editor;
