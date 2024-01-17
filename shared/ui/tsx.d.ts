import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: string]: React.DetailedHTMLProps<any, any>;
    }
  }
}
