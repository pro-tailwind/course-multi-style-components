# Pro Tailwind - Multi-Style Tailwind Components

This repo contains all the challenges for the Multi-Style Tailwind Components self-paced workshop.

You don't have to clone this repo since all the challenges can be completed via Gitpod.

When opening a Gitpod link, the relevant code file and UI preview will be open side by side.

## Installation

If you decide to clone the repo, here's what you need to do to get going:

### Clone the repo and install the local dependencies:

```sh
npm install
```

### Start the dev server:

```sh
npm run dev
```

You'll be able to open the project in your browser at [http://localhost:3000](http://localhost:3000).

## Course challenges

This course is a series of problem/solution sequences.

You work on a challenge, and then can compare your approach with the provided solution.

There are three sections to this workshop, as detailed below.

---

## 1. Button Section

In this section, we'll take a series of hardcoded buttons with repeating Tailwind classes, and extract the styles into dynamic, composable groups that map a Button component's style variant props.

The challenges for this section are located in `src/workshop/button`. Each challenge ID corresponds to the URL for a given challenge.

For example, the challenge you can see at `https://localhost:3000/button/02-04-01` will be located in `src/workshop/button/02-04-01`.

---

## 2. Modal Section

In this section, we'll leverage Headless UI to drastically improve the usability and accessibility of a Modal component. We'll then implement multiple style variants, making options available for the modal size, tone and slide-in animation direction.

The challenges for this section are located in `src/workshop/modal`. Each challenge ID corresponds to the URL for a given challenge.

For example, the challenge you can see at `https://localhost:3000/modal/03-04-01` will be located in `src/workshop/modal/03-04-01`.

---

## 3. Calendar-day Section

This challenge is based on some real world scenario that I faced myself when building the [Calendar App](https://calendar-app.protailwind.com).

Time after time, as I built the app from scratch to discover some interesting teaching moments, I ended up making a mess with the Calendar component.

The challenges for this section are located in `src/workshop/calendar-day`. Each challenge ID corresponds to the URL for a given challenge.

For example, the challenge you can see at `https://localhost:3000/calendar-day/04-04-01` will be located in `src/workshop/calendar-day/04-04-01`.

---

# Creating dynamic Gitpod links

Each challenge/solution can be open in Gitpod with the most relevant code snippet on the left panel, and the UI preview on the right.

To make the process of creating links easier, I've implemented three Gitpod environment variables that can be passed to a Gitpod URL to take care of opening the right files: `section`, `id` and `file`.

- `section`: one of the three main workshop sections (button, modal, calendar day)
- `id`: lesson ID (eg. `02-05-02`)
- `file`: the path (relative to lesson directory) to the code file to open on the left panel

[Looking at this line of the Gitpod YAML config](https://github.com/pro-tailwind/course-multi-style-components/blob/main/.gitpod.yml#L9) may help understand how this works.

You can pass environment variables to a Gitpod URL by adding a series of `key=value,key2=value2,key3=value3/` key-value pairs between the `https://gitpod.io/#` segment and the repo URL. You need a trailing slash to "close" the variables segment.

Here's an example:

```
https://gitpod.io/#section=button,id=02-07-01,file=button.tsx/https://github.com/pro-tailwind/course-multi-style-components
```

Here, the variables passed are:

```sh
section=button
id=02-07-01
file=button.tsx
```

### ⚠️ Important note

Sometimes, you'll want to open a code file (left panel) that is nested within the lesson directory.

Since in the Gitpod URL, a `/` slash _closes_ the environment variables string, you cannot pass something like `file=modal/index.tsx`. This will break the syntax.

To work around this, I've added a [string replacement in the Gitpod YAML file](https://github.com/pro-tailwind/course-multi-style-components/blob/main/.gitpod.yml#L9) that will convert a `+` symbol to a `/` in the parsed URL, effectively bypassing this issue.

What that means is if you want to open a nested file by default for a given lesson, you'll need to pass the path with `+` instead of `/`, like so: `file=modal+index.tsx`.

---

### Variable values for lesson links

Below is the environment variable data to generate Gitpod links for all lessons:

```json
{
  "02-02-01": { "section": "button", "id": "02-02-01", "file": "button.tsx" },
  "02-02-02": { "section": "button", "id": "02-02-02", "file": "button.tsx" },
  "02-03-01": { "section": "button", "id": "02-03-01", "file": "button.tsx" },
  "02-03-02": { "section": "button", "id": "02-03-02", "file": "button.tsx" },
  "02-04-01": { "section": "button", "id": "02-04-01", "file": "button.tsx" },
  "02-04-02": { "section": "button", "id": "02-04-02", "file": "button.tsx" },
  "02-05-01": { "section": "button", "id": "02-05-01", "file": "button.tsx" },
  "02-05-02": { "section": "button", "id": "02-05-02", "file": "button.tsx" },

  "03-02-01": { "section": "modal", "id": "03-02-01", "file": "modal+modal.tsx" },
  "03-02-02": { "section": "modal", "id": "03-02-02", "file": "modal+modal.tsx" },
  "03-03-01": { "section": "modal", "id": "03-03-01", "file": "modal+modal.tsx" },
  "03-03-02": { "section": "modal", "id": "03-03-02", "file": "modal+modal.tsx" },
  "03-04-01": { "section": "modal", "id": "03-04-01", "file": "modal+modal.tsx" },
  "03-04-02": { "section": "modal", "id": "03-04-02", "file": "modal+modal.tsx" },
  "03-05-01": { "section": "modal", "id": "03-05-01", "file": "modal+modal.tsx" },
  "03-05-02": { "section": "modal", "id": "03-05-02", "file": "modal+modal.tsx" },
  "03-06-01": { "section": "modal", "id": "03-06-01", "file": "modal+modal.tsx" },
  "03-06-02": { "section": "modal", "id": "03-06-02", "file": "modal+modal.tsx" },
  "03-07-01": { "section": "modal", "id": "03-07-01", "file": "modal+modal.tsx" },
  "03-07-02": { "section": "modal", "id": "03-07-02", "file": "modal+modal.tsx" },
  "03-08-01": { "section": "modal", "id": "03-08-01", "file": "modal+modal.tsx" },
  "03-08-02": { "section": "modal", "id": "03-08-02", "file": "modal+modal.tsx" },
  "03-08-03": { "section": "modal", "id": "03-08-03", "file": "modal+modal.tsx" },
  "03-09-01": { "section": "modal", "id": "03-09-01", "file": "modal+modal.tsx" },
  "03-09-02": { "section": "modal", "id": "03-09-02", "file": "modal+modal.tsx" },
  "03-10-01": { "section": "modal", "id": "03-10-01", "file": "modal+modal.tsx" },
  "03-10-02": { "section": "modal", "id": "03-10-02", "file": "modal+modal.tsx" },

  "04-02-01": { "section": "calendar-day", "id": "04-02-01", "file": "calendar+calendar-day.tsx" },
  "04-02-02": { "section": "calendar-day", "id": "04-02-02", "file": "calendar+calendar-day.tsx" },
  "04-03-01": { "section": "calendar-day", "id": "04-03-01", "file": "challenge.astro" },
  "04-03-02": { "section": "calendar-day", "id": "04-03-02", "file": "challenge.astro" },
  "04-04-01": { "section": "calendar-day", "id": "04-04-01", "file": "challenge+calendar-day.tsx" },
  "04-04-02": { "section": "calendar-day", "id": "04-04-02", "file": "challenge+calendar-day.tsx" }
}
```

Here's a list of all the Gitpod URLs for each lesson:

- 02-02-01: https://gitpod.io/#section=button,id=02-02-01,file=button.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 02-02-02: https://gitpod.io/#section=button,id=02-02-02,file=button.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 02-03-01: https://gitpod.io/#section=button,id=02-03-01,file=button.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 02-03-02: https://gitpod.io/#section=button,id=02-03-02,file=button.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 02-04-01: https://gitpod.io/#section=button,id=02-04-01,file=button.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 02-04-02: https://gitpod.io/#section=button,id=02-04-02,file=button.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 02-05-01: https://gitpod.io/#section=button,id=02-05-01,file=button.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 02-05-02: https://gitpod.io/#section=button,id=02-05-02,file=button.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-02-01: https://gitpod.io/#section=modal,id=03-02-01,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-02-02: https://gitpod.io/#section=modal,id=03-02-02,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-03-01: https://gitpod.io/#section=modal,id=03-03-01,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-03-02: https://gitpod.io/#section=modal,id=03-03-02,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-04-01: https://gitpod.io/#section=modal,id=03-04-01,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-04-02: https://gitpod.io/#section=modal,id=03-04-02,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-05-01: https://gitpod.io/#section=modal,id=03-05-01,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-05-02: https://gitpod.io/#section=modal,id=03-05-02,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-06-01: https://gitpod.io/#section=modal,id=03-06-01,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-06-02: https://gitpod.io/#section=modal,id=03-06-02,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-07-01: https://gitpod.io/#section=modal,id=03-07-01,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-07-02: https://gitpod.io/#section=modal,id=03-07-02,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-08-01: https://gitpod.io/#section=modal,id=03-08-01,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-08-02: https://gitpod.io/#section=modal,id=03-08-02,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-08-03: https://gitpod.io/#section=modal,id=03-08-03,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-09-01: https://gitpod.io/#section=modal,id=03-09-01,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-09-02: https://gitpod.io/#section=modal,id=03-09-02,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-10-01: https://gitpod.io/#section=modal,id=03-10-01,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 03-10-02: https://gitpod.io/#section=modal,id=03-10-02,file=modal+modal.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 04-02-01: https://gitpod.io/#section=calendar-day,id=04-02-01,file=calendar+calendar-day.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 04-02-02: https://gitpod.io/#section=calendar-day,id=04-02-02,file=calendar+calendar-day.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 04-03-01: https://gitpod.io/#section=calendar-day,id=04-03-01,file=challenge.astro/https://github.com/pro-tailwind/course-multi-style-components
- 04-03-02: https://gitpod.io/#section=calendar-day,id=04-03-02,file=challenge.astro/https://github.com/pro-tailwind/course-multi-style-components
- 04-04-01: https://gitpod.io/#section=calendar-day,id=04-04-01,file=challenge+calendar-day.tsx/https://github.com/pro-tailwind/course-multi-style-components
- 04-04-02: https://gitpod.io/#section=calendar-day,id=04-04-02,file=challenge+calendar-day.tsx/https://github.com/pro-tailwind/course-multi-style-components
