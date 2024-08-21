const Table = ({ data }) => {
    const header = data.schema;
    const rows = data.datarows;
    const action = data.action;
    const actionFooterTitle = data.actionFooter?.title;
    const actionFooter = data.actionFooter?.element;
    const actionFooterCount = Array.from({ length: data.schema.length - 1 });

    return (
        <table>
            <thead>
                <tr>
                    {header.map((item, key) => (
                        <th key={key}>{item.name}</th>
                    ))}
                    {action ? <th>Action</th> : null}
                </tr>
            </thead>
            <tbody>
                {rows.map((item, rowIndex) => (
                    <tr key={rowIndex}>
                        {item.map((dat, cellIndex) => (
                            <td key={cellIndex}>{dat}</td>
                        ))}
                        {action ? (
                            <td className="action-cell">
                                <div style={{ width: "fit-content" }}>
                                    {action}
                                </div>
                            </td>
                        ) : null}
                    </tr>
                ))}

                {actionFooter ? (
                    <tr className="action-footer">
                        <td>{actionFooterTitle}</td>
                        {actionFooterCount.map((_, key) => (
                            <td key={key}>{actionFooter}</td>
                        ))}
                    </tr>
                ) : null}
            </tbody>
        </table>
    );
};

export default Table;
