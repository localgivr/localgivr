class Causes extends Component {

    toggleCausesFollow(e) {
        let token = sessionStorage.getItem('token')

        if (e.target.checked) {
            fetch('/api/follow', {
                method: 'POST',
                headers: {},
                body: JSON.stringify({
                    token: token,
                    cause_id: e.target.getAttribute('data-id')
                })
            })
        }
        else {
            fetch('/api/follow', {
                method: 'DELETE',
                headers: {},
                body: JSON.stringify({
                    token: token,
                    cause_id: e.target.getAttribute('data-id')
                })
            })
        }
    }

    toggleOrgFollow(e) {

    }

    render() {
        let causes = this.state.causes.map((cause, index) => <label>
            <input type="checkbox" data-id={cause.id} />
        </label>)

        return <div>{causes}</div>
    }

}