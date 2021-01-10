import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';

import { connect } from 'react-redux';
import './grid-item.styles.scss';

const GridItem = (props) => {
  const { grid } = props.grid;
  const [exportContent, setExportContent] = useState(null);
  let parser, docNode, htmlElm, htmlElement, json;

  function rendergridHTML() {
    return grid.map((item, idx) => {
      return (
        <div
          key={idx}
          style={{
            gridColumnEnd: `span ${item.columnWidth}`,
            height: 'auto',
            border: '1px solid #777',
          }}
        >
          <div className="text-wrapper">
            <h5>Column</h5>
            <div>Width:{item.columnWidth}</div>
            <div className="text">
              {item.text ? item.text : `Column ${parseInt(idx) + 1}`}
            </div>
          </div>
        </div>
      );
    });
  }

  function mapDOM(htmlElement, json) {
    var treeObject = {};

    // If string convert to document Node
    if (typeof htmlElement === 'string') {
      if (window.DOMParser) {
        parser = new DOMParser();
        docNode = parser.parseFromString(htmlElement, 'text/xml');
      }
      htmlElement = docNode.firstChild;
    }

    //Recursively loop through DOM elements and assign properties to object
    function treeHTML(element, object) {
      object['type'] = element.nodeName;
      var nodeList = element.childNodes;
      if (nodeList != null) {
        if (nodeList.length) {
          object['content'] = [];
          for (var i = 0; i < nodeList.length; i++) {
            var num = parseInt(nodeList[i].nodeType, 10);
            if (num === 3) {
              object['content'].push(nodeList[i].nodeValue);
            } else {
              object['content'].push({});
              treeHTML(
                nodeList[i],
                object['content'][object['content'].length - 1]
              );
            }
          }
        }
      }
      if (element.attributes != null) {
        if (element.attributes.length) {
          object['attributes'] = {};
          for (let i = 0; i < element.attributes.length; i++) {
            object['attributes'][element.attributes[i].nodeName] =
              element.attributes[i].nodeValue;
          }
        }
      }
    }
    treeHTML(htmlElement, treeObject);

    return json ? JSON.stringify(treeObject) : treeObject;
  }

  function onExporting(dataType) {
    htmlElm = rendergridHTML();
    htmlElement = ReactDOMServer.renderToStaticMarkup(htmlElm);
    if (dataType === 'html') {
      setExportContent(htmlElement);
      return htmlElement;
    } else if (dataType === 'json') {
      json = mapDOM(htmlElement, true);
      setExportContent(json);
      return json;
    }
  }

  return (
    <div className="container-wrapper">
      <div className="container">
        <p>Grid</p>
        <div className="row">{rendergridHTML()}</div>
      </div>

      <input
        onClick={() => onExporting('html')}
        type="submit"
        value="Export HTML"
        className="export-html-btn"
        disabled={!props.grid.totalWidthGrid === 12}
      />
      <input
        onClick={() => onExporting('json')}
        type="submit"
        value="Export JSON"
        className="export-json-btn"
        disabled={!props.grid.totalWidthGrid === 12}
      />
      <div className="export-content-wrapper">{exportContent}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { grid } = state;
  return { grid };
};
export default connect(mapStateToProps)(GridItem);
