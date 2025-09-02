Learning Efficiency Focus

1. How can you change the layout of the lists from top-down to having three columns?
        -- I added a specific class the ul and used display: grid and grid-template-columns to apply the rules for the CSS.

2. How can you sort each list of names alphabetically?
        -- Using the sort() method chained with localeCompare() I can modify the existing array and sort based on how localeCompare organizes the data. The sort() method works well, but in tandem with localeCompare there is case
        sensitivity that was not there with just the sort() method.

3. How would your ERD change if the customer had the following, new requirement?
    Each dock will only service some of the hauling ships because of contracts with their companies. For example, Rotterdam will only service "Seawise Giant" and "Pioneering Spirit", and Busan will service "Seawise Giant" and "Boaty McBoatface". Each hauling ship can be serviced by many docks, and each dock can service one, or more, hauling ships. You need to keep track of the allowed relationships in your database.
        -- 

4. What is structuredClone() in JavaScript, and how could it be used in your project?  
        -- The structured clone creates a deep copy of the targeted data and allows for circular references and supports many different data types.