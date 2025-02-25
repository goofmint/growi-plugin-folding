import { h, Properties } from 'hastscript';
import type { Plugin } from 'unified';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';

export const foldingCode = (Tag: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, ...props }) => {
    try {
      if (!props.inline && !props.ignore) {
        props.ignore = true;
        return (<details open={true}>
          <Tag {...props}>{children}</Tag>
        </details>);
      }
      // your code here
      // return <>Hello, GROWI!</>;
    }
    catch (err) {
      // console.error(err);
    }
    // Return the original component if an error occurs
    return (
      <Tag {...props}>{children}</Tag>
    );
  };
};

interface GrowiNode extends Node {
  name: string;
  data: {
    hProperties?: Properties;
    hName?: string;
    hChildren?: Node[] | { type: string, value: string, url?: string }[];
    [key: string]: any;
  };
  type: string;
  attributes: {[key: string]: string}
  children: GrowiNode[] | { type: string, value: string, url?: string }[];
  value: string;
  title?: string;
  url?: string;
}
