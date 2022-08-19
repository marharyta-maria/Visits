const editVisit = async (id, body) => {
    const newVisit = fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'PUT',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(body)
    })
    .then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            throw new Error()
        }
    })
    return newVisit 
}

export default editVisit