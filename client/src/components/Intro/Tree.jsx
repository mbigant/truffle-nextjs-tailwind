function Tree() {
    return (
        <code className="block bg-gray-200 rounded-[20px] p-3">
            <div>{`.\n`}</div>
            <div>
                {`├── client`}
                <span className="text-blue-600">{`   # React project (create-react-app)\n`}</span>
            </div>
            <div>
                {`└── truffle`}
                <span className="text-blue-600">{`  # Truffle project`}</span>
            </div>
        </code>
    );
}

export default Tree;
