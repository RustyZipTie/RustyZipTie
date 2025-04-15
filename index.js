async function fetchProjects() {
    try {
        const response = await fetch('projects.json')
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

const main = async () => {
    const projects = await fetchProjects();
    const myDoc = [
        project(projects[1])
    ]
    render(myDoc, document.body)
}

main()