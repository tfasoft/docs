const DocsAPI = () => {
    const e820 = {
        "error": 820,
        "message": "User authentication token is not valid"
    }

    const e290 = {
        "error": 290,
        "message": "Admin access token is not valid"
    };

    const e800 = {
        "error": 800,
        "user": {
          "_id": "62b016d518f301a7ea5668e4",
          "uid": 1133695614,
          "token": "yJIlYYiZEIytuhZHQTEEpJDDE",
          "createdAt": "2022-06-20T06:42:29.507Z",
          "updatedAt": "2022-06-20T14:06:57.255Z",
          "__v": 0
        }
      }

    return (
        <div className="pt-5">
            <h1><span className="tags">#</span> API documents</h1>
            <p>Here is all about our stuff</p>
            <br/>
            <h2><span className="tags">##</span> Requirements</h2>
            <p>Register in <b>TFA</b> and get your own access token.</p>
            <p>Then, use it in your API queries.</p>
            <br/>
            <h2><span className="tags">##</span> API query</h2>
            <p>So, if you have your access token, just use this address to quering.</p>
            <table className="table table-bordered border-success">
                <tbody>
                    <tr>
                        <td>https://api.tfa.com/access/<b>Access token</b>/<b>User token</b></td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <h2><span className="tags">##</span> Status codes</h2>
            <p>Status codes is a little diffrent from other APIs.</p>
            <table className="table table-bordered border-success">
                <thead>
                    <tr>
                        <th scope="col"><b>Code</b></th>
                        <th scope="col"><b>Details</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><b>800</b></th>
                        <td>800 means your access token and user token is correct.</td>
                    </tr>
                    <tr>
                        <th scope="row"><b>820</b></th>
                        <td>820 means admin access token is wrong.</td>
                    </tr>
                    <tr>
                        <th scope="row"><b>290</b></th>
                        <td>290 means user token is not existed.</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <h3><span className="tags">###</span> 800 code</h3>
            <p>When access token is correct and user token is existed, you will get 800 code.</p>
            <p>So, your data will be like this:</p>
            <pre className="code">
                {JSON.stringify(e800, null, 2)}
            </pre>
            <p>When code be 800 you can also access to the user data. Only ID is what you can restore.</p>
            <br/>
            <h3><span className="tags">###</span> 290 code</h3>
            <p>When access token is correct, you will get 290 code.</p>
            <p>So, your data will be like this:</p>
            <pre className="code">
                {JSON.stringify(e290, null, 2)}
            </pre>
            <br/>
            <h3><span className="tags">###</span> 820 code</h3>
            <p>When access token is correct but user token is not existed, you will get 290 code.</p>
            <p>So, your data will be like this:</p>
            <pre className="code">
                {JSON.stringify(e820, null, 2)}
            </pre>
        </div>
    );
}

export default DocsAPI;