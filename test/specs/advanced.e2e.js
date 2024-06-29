describe("Advanced testing", async () => {
  it.skip("File upload", async () => {
    await browser.url("https://the-internet.herokuapp.com/upload");
    const filePath = "./sample.jpg";
    await browser.customFileUpload(filePath, "#file-upload", "#file-submit");
    await browser.pause(3000);
    const text = await $("#uploaded-files").getText();
    expect(text).toEqual("sample.jpg");
  });

  it('display title and URL', async () => {
    const result = await browser.getTitleURL("https://the-internet.herokuapp.com/upload");
    console.log(result)
    console.log("URL:", result.url);
    console.log("Title:", result.title);

  })
});
