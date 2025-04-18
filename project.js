const project = (defenition, size) => {
    console.log(defenition)
    return {
        type: "a",
        attributes: {
            href: defenition.links[defenition.main_link],
        },
        target: "_blank",
        children: [
            {
                type: "div",
                style: {
                    background: `url(${defenition.image})`
                },
                className: "project-wrapper " + size,
                children: [
                    {
                        type: "h1",
                        textContent: defenition.title,
                        className: "project-title " + size
                    },
                    {
                        type: "p",
                        textContent: defenition.description,
                        className: "project-description " + size
                    },

                ]
            }

        ]

    }
}