# DAT257-Agile
Agile project in DAT257

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Features](#features)
- [Developers](#developers)

## Description 

Our crime visualization tool is an attempt to revolutionize the way crime data is analyzed and handled in Sweden.
By harnessing the power of data visualization and leveraging the Swedish Police's event API, we strive to provide users with actionable insights which contribute to safer societies and well-informed decision-making processes.


## Installation
Note that the following commands are to be run in the agile-app directory, not DAT257-Agile.

If the package-lock.json was recently updated, or you have not run the project in a long time please run:

```bash
npm install
```

Otherwise / afterwards, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features
- Händelser(Events) displays crime type, municipality/county, GPS position, id number, brief description and a link taking the user to a more in depth description on the swedish police webbsite. The events can be filtered by crime type (brottstyp), municipality/county (kommun eller län) and date.
![image](https://github.com/willayy/DAT257-Agile/assets/91186024/ebb11a07-ab23-4c6d-92ee-05928a008e62)

- Statistik(Statistics) generates a table with three colums containing municipality/county, crime type (brottstyp) and a number depicting the amount of reports gathered by the swedish police of that specific crime type.
![Screenshot 2024-05-09 at 15 25 47](https://github.com/willayy/DAT257-Agile/assets/91186024/cbc46767-5422-478e-8764-cfb62160baed)

- Visualisering(Visualization) lets the user plot a bargraph displaying a specific crime and municipality/county over a pre determined time period.
![Screenshot 2024-05-09 at 15 32 44](https://github.com/willayy/DAT257-Agile/assets/91186024/bff63173-cdc6-4b77-bfc3-b18ad37199de)

- Om oss(About us) contains information about why this project was created along with names and contact information of the developers. 
![Screenshot 2024-05-09 at 15 34 27](https://github.com/willayy/DAT257-Agile/assets/91186024/ea3f3c8a-b09b-4309-9673-283fbbc13ae2)

## Developers 

[Jonatan Markusson](https://github.com/jmarkusson),  
[Max Dreifeldt](https://github.com/maxdreifeldt), 
[Lucas Häyhänen](https://github.com/Aoc67310), 
[William Norland](https://github.com/willayy), 
[Mandus Högberg](https://github.com/Palpat3), 
[Erik Andreassson](https://github.com/0-Gixty-0), 
[Alexander Muhr](https://github.com/DuchessMuhr), 
