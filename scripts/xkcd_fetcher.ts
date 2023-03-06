fetch("https://fwd.innopolis.app/api/hw2?email=y.kim@innopolis.university")
  .then((response: Response) => response.json())
  .then((data: number) => {
    fetch(`https://getxkcd.vercel.app/api/comic?num=${data}`)
      .then((response: Response) => response.json())
      .then((data) => {
        // Save the comic image, title, and date to use in the HTML
        const comicImage: string = data.img;
        const comicTitle: string = data.title;
        const comicAlt: string = data.alt; // alt text from the data
        // use date.toLocaleDateString() to get a string in the format "month day, year"
        const comicDate: string = new Date(data.year, data.month - 1, data.day).toLocaleDateString();
        // Create the HTML elements
        const comicImageElement: HTMLImageElement = document.createElement("img");
        const comicTitleElement: HTMLElement = document.createElement("h3");
        const comicDateElement: HTMLElement = document.createElement("p");
        // Set the attributes of the HTML elements
        comicImageElement.setAttribute("src", comicImage);
        comicImageElement.setAttribute("alt", comicAlt);
        comicTitleElement.textContent = comicTitle;
        comicDateElement.textContent = comicDate;
        // Append the elements to the HTML
        const element: HTMLElement | null = document.getElementById("xkcd");
        if (element !== null) {
            element.appendChild(comicTitleElement);
            element.appendChild(comicDateElement);
            element.appendChild(comicImageElement);
        }
        // log data to the console for debugging
        // console.log(data);
      })
  });