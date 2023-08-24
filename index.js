window.onload = function () {

  const collections = document.querySelector('.collections');
  const popUp = document.querySelector('.about-WebApp');
  const resetButton = document.querySelector('.reset');
  const loading = document.querySelector('.loading');
  const actions = document.querySelector(".actions");

  function loadBooks() {
    if (localStorage.getItem('book')) {

      popUp.style.display = 'none';
      actions.style.display='grid';
      resetButton.style.display = 'block';
      collections.style.display = 'none';
      loading.style.display = 'block';

      var booksCount = JSON.parse(localStorage.getItem('book'));
      var i = 0;
      collections.innerHTML = "";

      booksCount.forEach(element => {
        collections.innerHTML += `
        <div class="collection" id="${i++}">
        <div class="book-Details-left">
          <div>
            <p class="book-Details-Heading">Title</p>
            <p>${element.bookName}</p>
          </div>
          <div>
            <p class="book-Details-Heading">Author</p>
            <p>${element.author}</p>
          </div>
          <div>
            <p class="book-Details-Heading">Source</p>
              <p>${element.source}</p>
          </div>
          <div>
            <p class="book-Details-Heading">Price</p>
            <p>${element.price}</p>
          </div>
          <div>
            <p class="book-Details-Heading">Purchase Date</p>
            <p>${element.purchaseDate}</p>
          </div>
        </div>
  
        <div class="book-Details-right">
          <div class="actions">
            <button class="edit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1);transform: ; msFilter:;" class="icon">
                <path
                  d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z">
                </path>
              </svg>Edit</button>
            <button class="delete">Delete</button>
          </div>
          <div class="book-Image">
            <img src="${element.image}" alt="${element.bookName}">
          </div>
        </div>
  
        <div class="hr"></div>
  
        <div class="details">
          <p class="date">${element.addedDate}</p>
          
          <div class="status ${element.bought === false ? "not-bought" : "bought"}">
          <p>${element.bought === false ? "Not Bought" : "Bought"}</p>
        </div>
        </div >
  
      </div >
        `
      });
      collections.style.display = 'grid';
      loading.style.display = 'none';
    }

    else {
      collections.innerHTML = "";
      popUp.style.display = 'block';
      actions.style.display='block';
      resetButton.style.display = 'none';
    }

  }
  loadBooks();

  // ----------------------- Form Opening Function -----------------------

  const formBackground = document.querySelector('.form');
  const newFormButton = document.querySelector('#New-Form');
  const editFormButton = document.querySelector('#Edit-Form');

  // New Book Adding Form 
  function openForm() {
    formBackground.style.display = 'flex';
    newFormButton.classList.add('open');
  }

  function closeForm() {
    newFormButton.classList.remove('open');
    formBackground.style.display = 'none';
  }

  document.querySelector('.add-Book').addEventListener('click', function () {
    openForm();
  });

  document.querySelector('#New-Form .cross-icon').addEventListener('click', function () {
    closeForm();
  });


  // Edit Book Details Form
  function openEditForm() {
    formBackground.style.display = 'flex';
    editFormButton.classList.add('open');
  }

  function closeEditForm() {
    editForm.classList.remove('open');
    formBackground.style.display = 'none';
  }

  var editFormId = "";
  function refreshEventListners() {
    const editBook = document.querySelectorAll('.edit');
    const deleteBookBtn = document.querySelectorAll('.delete');
    editBook.forEach((e) => {
      e.addEventListener('click', () => {
        openEditForm();
        clearError();
        editFormId = e.parentElement.parentElement.parentElement.id;
        setEditForm(editFormId);
      });
    });

    deleteBookBtn.forEach((e) => {
      e.addEventListener('click', () => {
        var deleteBookID = e.parentElement.parentElement.parentElement.id;
        deleteBook(deleteBookID);
      })
    })
  }
  refreshEventListners();

  document.querySelector('#Edit-Form .cross-icon').addEventListener('click', function () {
    closeEditForm();
  });


  // Reset Local Storage
  function resetLocalStorage() {
    var confirmation = confirm("All Data Will Be Deleted\nAre You Sure ?");
    if (confirmation) {
      localStorage.removeItem('book');
      loadBooks();
      refreshEventListners();
    }
  }

  resetButton.addEventListener('click', function () {
    resetLocalStorage();
  });

  //---------------------- Forms Functions -----------------------

  // Radio Button Checking For Tab Open

  //------- New Form
  const addbookBought = document.forms["Add-Book"]["Buy"][0];
  const addbokNotBought = document.forms["Add-Book"]["Buy"][1];
  const addbookBoughtTabs = document.querySelectorAll('#New-Form .if-Bought');

  addbookBought.addEventListener('click', () => {
    if (addbookBought.checked) {
      for (let items of addbookBoughtTabs) {
        items.style.display = 'block';
      }
    }
  })

  addbokNotBought.addEventListener('click', () => {
    if (addbokNotBought.checked) {
      for (let items of addbookBoughtTabs) {
        items.style.display = 'none';
      }
    }
  })

  // ------- Edit Form
  const editbookBought = document.forms["Edit-Book"]["Buy"][0];
  const editbookNotBought = document.forms["Edit-Book"]["Buy"][1];
  const editbookBoughtTabs = document.querySelectorAll('#Edit-Form .if-Bought');

  function editbookBoughtTabOpen() {
    if (editbookBought.checked) {
      for (let items of editbookBoughtTabs) {
        items.style.display = 'block';
      }
    }
  }

  function editbookBoughtTabClose() {
    if (editbookNotBought.checked) {
      for (let items of editbookBoughtTabs) {
        items.style.display = 'none';
      }
    }
  }

  editbookBought.addEventListener('click', () => {
    if (editbookBought.checked) {
      for (let items of editbookBoughtTabs) {
        items.style.display = 'block';
      }
    }
  })

  editbookNotBought.addEventListener('click', () => {
    if (editbookNotBought.checked) {
      for (let items of editbookBoughtTabs) {
        items.style.display = 'none';
      }
    }
  })

  // Image To DataUrl
  function imageToData(image) {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(alert("Image Rejected...Upload New One"));
      };

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(image);
    });
  }

  // Purchase Date Formatter
  function formatDate(date) {
    if (date !== "") {
      var formatDate = new Date(date).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" });
      return formatDate;
    }

    else {
      return false;
    }
  }

  // String To Date Formatter
  function stringtoDate(strDate) {
    var date = new Date(strDate);
    date.setDate(date.getDate() + 1);
    var result = date.toISOString().split('T')[0];
    return result;
  }

  // String Capitalizer
  function stringCapitalizer(str) {
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
  }

  // Input Field Error Setter
  function setError(formName, name) {
    document.forms[formName][name].style.borderColor = 'red';
    document.forms[formName][name].classList.add('form-Error');
  }

  // Input Field Error Clearer
  function clearError() {
    var items = document.querySelectorAll('.form-Error');
    items.forEach(element => {
      element.style.borderColor = "#e9ecef";
      element.classList.remove('form-Error');
    });
  }

  // Submit New Form Data
  function submitData(image, name, author, source, boughtStatus, price, purchaseDate, todaysDate) {
    // For Old User
    if (localStorage.getItem('book')) {
      console.log('this');
      var oldData = JSON.parse(localStorage.getItem('book'));

      var newData =
      {
        "id": Math.floor(Math.random() * 1000),
        "image": image,
        "bookName": name,
        "author": author,
        "source": source,
        "bought": boughtStatus,
        "price": price,
        "purchaseDate": purchaseDate,
        "addedDate": todaysDate
      };

      oldData.push(newData);
      try {
        localStorage.setItem('book', JSON.stringify(oldData));
      } catch (error) {
        alert("Memory Full\nDelete Some Books To Store New Book");
      }
    }

    // For New User
    else {
      let array = [];
      var data =
      {
        "id": Math.floor(Math.random() * 1000),
        "image": image,
        "bookName": name,
        "author": author,
        "bought": boughtStatus,
        "source": source,
        "price": price,
        "purchaseDate": purchaseDate,
        "addedDate": todaysDate
      };
      array.push(data);
      localStorage.setItem('book', JSON.stringify(array));
    }

    loadBooks();
    refreshEventListners();
  }

  // Submit Edited Form Data
  function editData(image, name, author, source, boughtStatus, price, purchaseDate, todaysDate) {
    if (localStorage.getItem('book')) {

      var oldData = JSON.parse(localStorage.getItem('book'));
      oldData[editFormId].image = (image != undefined ? image : oldData[editFormId].image);
      oldData[editFormId].bookName = name;
      oldData[editFormId].author = author;
      oldData[editFormId].source = source;
      oldData[editFormId].bought = boughtStatus;
      oldData[editFormId].price = price;
      oldData[editFormId].purchaseDate = purchaseDate;
      oldData[editFormId].addedDate = todaysDate;

      try {
        localStorage.setItem('book', JSON.stringify(oldData));
      } catch (error) {
        alert("Memory Full\nDelete Some Books To Store New Book");
      }
    }

    loadBooks();
    refreshEventListners();
  }

  // Data Validation

  // ----- New Form
  const newForm = document.forms['Add-Book'];
  const Nregex = /\b([A-Za-z]+[A-Za-z]+[ ]*)/i

  newForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Initializing The Values
    var image = "";
    var name = "";
    var author = "";
    var source = "";
    var price = "-";
    var purchaseDate = "-";
    var todaysDate = new Date().toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" });
    var boughtStatus = false;
    var returnValue = true;

    // Clearing All Errors
    clearError();

    // Image Validation
    image = document.forms["Add-Book"]["Image"].files[0];
    if (image !== "" && image !== undefined) {
      var ext = image.name.split('.').pop();
      if ((image.size <= 102400) && (ext === "png" || ext === "jpg" || ext === "jpeg")) {
        var imageData = await imageToData(image);
      }

      else {
        setError("Add-Book", "Image");
        returnValue = false;
      }
    }

    else {
      setError("Add-Book", "Image");
      returnValue = false;
    }

    // Book Name Validation
    name = stringCapitalizer(document.forms["Add-Book"]["Title"].value);
    if (Nregex.test(name) === false) {
      setError("Add-Book", "Title");
      returnValue = false;
    }

    // Author Name Validation
    author = stringCapitalizer(document.forms["Add-Book"]["Author"].value);
    if (Nregex.test(author) === false) {
      setError("Add-Book", "Author");
      returnValue = false;
    }

    // Source Validation
    source = stringCapitalizer(document.forms["Add-Book"]["Source"].value);
    if (Nregex.test(source) === false) {
      setError("Add-Book", "Source");
      returnValue = false;
    }

    // Bought and Not Bought Validation
    if (addbookBought.checked) {
      price = document.forms["Add-Book"]["Price"].value;
      if (price <= 0) {
        setError("Add-Book", "Price");
        returnValue = false;
      }

      purchaseDate = formatDate(document.forms["Add-Book"]["purchaseDate"].value);
      if (purchaseDate === false) {
        setError("Add-Book", "purchaseDate");
        returnValue = false;
      }

      boughtStatus = true;
    }

    if (returnValue) {

      submitData(imageData, name, author, source, boughtStatus, price, purchaseDate, todaysDate);

      // Closing The Bought Tabs
      if (addbokNotBought.checked) {
        for (let items of addbookBoughtTabs) {
          items.style.display = 'none';
        }
      }

      newForm.reset();
      closeForm();
    }
  })

  // ----- Edit Form
  // Setting Data on Edit Form
  const editForm = document.forms["Edit-Book"];
  function setEditForm(id) {
    var data = JSON.parse(localStorage.getItem('book'))[id];
    document.forms["Edit-Book"]["Title"].value = data.bookName;
    document.forms["Edit-Book"]["Author"].value = data.author;
    document.forms["Edit-Book"]["Source"].value = data.source;

    if (data.bought === true) {
      editbookBought.checked = true;
      editbookBoughtTabOpen();
      document.forms["Edit-Book"]["Price"].value = data.price;
      document.forms["Edit-Book"]["purchaseDate"].value = stringtoDate(data.purchaseDate);
    }

    else {
      editbookNotBought.checked = true;
      editbookBoughtTabClose();
      document.forms["Edit-Book"]["Price"].value = "";
      document.forms["Edit-Book"]["purchaseDate"].value = "";
    }
  }

  function deleteBook(id) {
    var data = JSON.parse(localStorage.getItem('book'));
    if (confirm(`Delete ${data[id].bookName} Book ?`)) {

      if (data.length === 1) {
        localStorage.removeItem('book');
      }

      else {
        data.splice(id, 1);
        try {
          localStorage.setItem('book', JSON.stringify(data));
        } catch (error) {
          alert("Error Occured");
        }
      }
      loadBooks();
      refreshEventListners();
    }
  }

  // Edit Book Form Data Validation
  editForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Initializing The Values
    var image = "";
    var name = "";
    var author = "";
    var source = "";
    var price = "-";
    var purchaseDate = "-";
    var todaysDate = new Date().toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" });
    var boughtStatus = false;
    var returnValue = true;

    // Clearing All Errors
    clearError();

    // Image Validation
    image = document.forms["Edit-Book"]["Image"].files[0];
    if (image !== "" && image !== undefined) {
      var ext = image.name.split('.').pop();
      if ((image.size <= 102400) && (ext === "png" || ext === "jpg" || ext === "jpeg")) {
        var imageData = await imageToData(image);
      }

      else {
        setError("Add-Book", "Image");
        returnValue = false;
      }
    }

    else {
      console.log("nhi hai");
      image = false;
    }

    // Book Name Validation
    name = stringCapitalizer(document.forms["Edit-Book"]["Title"].value);
    if (Nregex.test(name) === false) {
      setError("Edit-Book", "Title");
      returnValue = false;
    }

    // Author Name Validation
    author = stringCapitalizer(document.forms["Edit-Book"]["Author"].value);
    if (Nregex.test(author) === false) {
      setError("Edit-Book", "Author");
      returnValue = false;
    }

    // Source Validation
    source = stringCapitalizer(document.forms["Edit-Book"]["Source"].value);
    if (Nregex.test(source) === false) {
      setError("Edit-Book", "Source");
      returnValue = false;
    }

    // Bought and Not Bought Validation
    if (editbookBought.checked) {
      price = document.forms["Edit-Book"]["Price"].value;
      if (price <= 0) {
        setError("Edit-Book", "Price");
        returnValue = false;
      }

      purchaseDate = formatDate(document.forms["Edit-Book"]["purchaseDate"].value);
      if (purchaseDate === false) {
        setError("Edit-Book", "purchaseDate");
        returnValue = false;
      }

      boughtStatus = true;
    }

    if (returnValue) {
      editData(imageData, name, author, source, boughtStatus, price, purchaseDate, todaysDate);

      // Closing The Bought Tabs
      if (addbokNotBought.checked) {
        for (let items of addbookBoughtTabs) {
          items.style.display = 'none';
        }
      }

      editForm.reset();
      closeEditForm();
    }
  })
}














