type Params = {
  iframeDocument: HTMLDocument;
  html: string;
  css: string;
};

function addContentToFragment({ iframeDocument, html, css }: Params): void {
  const content = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${html}</body></html>`;
  iframeDocument.open("text/html", "");
  iframeDocument.write(content);
  iframeDocument.close();
}

export default addContentToFragment;
