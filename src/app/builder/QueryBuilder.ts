import { Query } from "mongoose";

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;
    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(searchableFields: string[]) {
        const search = this?.query?.search
        if (search) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map(item => {
                    return {
                        [item]: { $regex: search, $options: 'i' }
                    }
                })
            })
        }
        return this
    }
    filter() {
        const { filter } = this.query;

        if (filter) {
            const allAuthorId = (filter as string).split(',')
            this.modelQuery = this.modelQuery.find({ author: { $in: allAuthorId } });
            return this
        }
        return this

    };
    sortBy() {
        const sortOrder = this.query.sortOrder ? (this.query.sortOrder === 'asc' ? '' : '-') : '-'
        const sortBy = this.query.sortBy ? (this.query.sortBy as string).split(',').map(item => `${sortOrder}${item}`).join(' ') : `${sortOrder}createdAt`;
        this.modelQuery = this.modelQuery.sort(sortBy as string);
        return this;
    };
    paginate() {
        const page = this.query.page ? Number(this.query.page) : 1;
        const limit = this.query.limit ? Number(this.query.limit) : 10;
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this
    }
    fields() {
        const fields = this.query.fields ? (this.query.fields as string).split(',').join(' ') : '-__v';
        this.modelQuery = this.modelQuery.select(fields);
        return this
    }

}


export default QueryBuilder;