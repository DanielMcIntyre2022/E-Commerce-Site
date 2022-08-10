const {Schema, default: mongoose} = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'is required']
    },
    email: {
        type: String, 
        required: [true, 'is required'],
        unique: true,
        index: true,
        validate: {
            validator: function (str) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    password: {
        type: String,
        required: [true, 'is required']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    cart: {
        type: Object, 
        default: {
            total: 0,
            count: 0, 
        }
    },
    notifications: {
        type: Array, 
        default: [],
    },
    orders: [{type:Schema.Types.ObjectId, ref: 'Order'}]

})

UserSchema.statics.findByCredentials = async function (email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('invalid credentials');
    const isSamePassword = bcrypt.compareSync(password, user.password);
    if (isSamePassword) return user;
    throw new Error('invalid credentials');
}

UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toOject();
    delete userObject.password;
    return userObject;
}

UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next(); 
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return (err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return (err);

            user.password = hash;
            next();
    })
    })
})

const user = mongoose.model('user', UserSchema);

module.exports = user;