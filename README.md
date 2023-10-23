# Film Mining
## Description

Developing a web application that can search movies and create lists with the API provided by [TMDb](https://www.themoviedb.org/documentation/api)

## Setup

Using **Create React App** to set up project.\
Installed packages:

- react-redux + @reduxjs/toolkit
- axios + axios-mock-adapter
- styled-components + @types/styled-components
- react-router-dom
- react-toastify

## Features

1. Show top 20 popular movies.
2. Search movies and show results.
3. Add movie to watch list and favorite list.
4. Remove movie from lists.
5. Pagination for lists.
6. Show movie details including posters and trailers.
7. Show notification after actions.
8. Error & Loading management
9. Responsive design
10. Unit tests

## Unit Tests

Using **React Testing Library** + **axios-mock-adapter** to mock requests.

#### 1. actions.test.tsx
<table>
<tr>
<td>Name</td>
<td>Should be able to show toast after adding to list.</td>
</tr>
<tr>
<td>Description</td>
<td>A notification should be displayed when clicking the bookmark icon on movie cards. In this test the mock data returns success result. Make sure this notification toasts a success message.</td>
</tr>
</table>

#### 2. details.test.tsx
<table>
<tr>
<td>Name</td>
<td>Should be able to show all posters for more than 6 posters.</td>
</tr>
<tr>
<td>Description</td>
<td>By default there are only 6 posters on the movie details page. Make sure <ins>Show all</ins> link is displayed for more than 6 posters and by clicking on this link it will be renamed to <ins>Show less</ins> and the rest of the posters will also be displayed.</td>
</tr>
</table>

#### 3. home.test.tsx
<table>
<tr>
<td>Name</td>
<td>Should be able to change the URL with the appropriate query for searching.</td>
</tr>
<tr>
<td>Description</td>
<td>Make sure the URL slug is changed to search with the appropriate query by clicking the enter button.</td>
</tr>
</table>

#### 4. list.test.tsx
<table>
<tr>
<td>Name</td>
<td>Should be able to disable pagination buttons for first and last pages.</td>
</tr>
<tr>
<td>Description</td>
<td>Make sure the next button in the pagination is disabled for the last page and the previous button for first page.</td>
</tr>
<table>
<tr>
<td>Name</td>
<td>Should be able to show the Empty list if the movie list is empty.</td>
</tr>
<tr>
<td>Description</td>
<td>Make sure the Empty component is shown when the result is empty.</td>
</tr>
</table>

## How to install and run

- npm install
- npm start
- npm test