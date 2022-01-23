import React, { useEffect, useState, useRef } from "react";
import { EditorState } from "@codemirror/basic-setup";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import beautify_js from 'js-beautify';

const CodeBox = (props) => {
  const editor = useRef();
  const [code, setCode] = useState("");
  
  useEffect(() => {

    const { current } = editor;
    
    var formattedJSON = beautify_js(props.code, { indent_size: 2 });

    const onUpdate = EditorView.updateListener.of((src) => {
      setCode(src.state.doc.toString());
    });

    const state = EditorState.create({
      doc: formattedJSON,
      extensions: [
        keymap.of([defaultKeymap, indentWithTab]),
        javascript(),
        onUpdate,
      ],
    });

    const view = new EditorView({ state, parent: current });

    return () => {
      view.destroy();
    };
  }, [props]);

  return (
    <>
    <div className="bg-secondary" style={{ minHeight: '100px' }} ref={editor}></div> 
    </>
  );
};

export default CodeBox;
