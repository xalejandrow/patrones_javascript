const auditProps = {
    createdAt: { default: new Date },
    updatedAt: { default: new Date },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User'},
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User'}
}

const Model = defaultProps => {
    return(name, props) => {
        const schema = mongose.schema({
            ...defaultProps,
            ...props,
        });

        return mongose.mondel(name, schema);
    }
}

export const withAudit = Model(auditProps);

// ... en otro archivo ...

withAudit('Producto', {
    name: String,
    desc: String,
});