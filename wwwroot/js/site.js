function initOnlyOffice(targetId, documentUrl, documentType, key, title) {
    var config = {
        document: {
            fileType: documentType,
            key: key,
            title: title,
            url: documentUrl,
        },
        type: "desktop",
        width: "100%",
        height: "700px",
        editorConfig: {
            mode: "edit", // O "view" para solo lectura
            lang: "es",
            // callbackUrl: callbackUrl,
        }
    };
    var editor = new DocsAPI.DocEditor(targetId, config);
}