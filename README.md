# react-gradebook

### Getting Started

Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/aorinevo/react-gradebook.git
> cd react-gradebook
> npm install
> npm start
```

### API

**Course List**
----
  Returns json data about a single user.

* **URL**

  /courses

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
  ```javascript
    {
      "course_list": [
        {
          "id": 1,
          "name": "Calculus I",
          "school": "Bergen Community College",
          "semester": "Fall",
          "year": 2015
        },
        {
          "id": 2,
          "name": "Algebra I",
          "school": "Rutgers University",
          "semester": "Spring",
          "year": 2015
        },
        {
          "id": 3,
          "name": "Data Structures",
          "school": "Stevens Institute of Technology",
          "semester": "Fall",
          "year": 2014
        }
      ]
    }
  ```    
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/courses",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
