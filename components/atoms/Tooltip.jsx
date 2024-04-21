import ReactDOMServer from 'react-dom/server';
import { Tooltip as ToolTip } from 'react-tooltip';

export default function Tooltip({ children, text, id }) {
  return (
    <>
      <a 
        href="#" 
        className="text-primary underline"
        data-tooltip-html={ReactDOMServer.renderToStaticMarkup(children)}
        data-tooltip-id={id}
      >
        {text}
      </a>
      <ToolTip id={id} />
    </>
  )
}