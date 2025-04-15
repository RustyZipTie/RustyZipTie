const project = (defenition) => {
    console.log(defenition)
    return {
        type: "a",
        href: defenition.links[defenition.main_link],
        target: "_blank",
        children: [
            {
                type: "div",
                style: {
                    background: `url(${defenition.image})`
                },
                className: "project-wrapper",
                children: [
                    {
                        type: "h1",
                        textContent: defenition.title,
                        className: "project-title"
                    },
                    {
                        type: "p",
                        textContent: defenition.description,
                        className: "project-description"
                    },

                ]
            }

        ]

    }
}