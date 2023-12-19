import TabBar from "./TabBar";
import { marked } from "marked";

marked.use({ breaks: true });

const Previewer = ({ text }) => {
  function getHtml(text) {
    let markup = marked.parse(text);
    return { __html: markup };
  }

  return (
    <div className="h-full w-1/2 flex flex-col">
      <TabBar title={"Preview"} />
      <div
        id="preview"
        className="border grow font-sans overflow-auto leading-relaxed"
        dangerouslySetInnerHTML={getHtml(text)}
      ></div>
    </div>
  );
};

export default Previewer;
