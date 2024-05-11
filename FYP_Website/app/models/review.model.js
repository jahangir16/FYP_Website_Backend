const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("reviews", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        review_content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false, // add this line
        // Other configurations if needed
        
    });
   

    return Review;
};
