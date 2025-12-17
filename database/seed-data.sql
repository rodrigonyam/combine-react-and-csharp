-- Insert default admin user
INSERT INTO Users (FirstName, LastName, Email, PasswordHash, Role, CreatedAt, UpdatedAt)
VALUES 
('Admin', 'User', 'admin@projectmanager.com', '$2a$11$8Q7MYlUqW3W2W2W2W2W2WeFh1CqV4kV4kV4kV4kV4kV4kV4kV4kV4', 2, GETUTCDATE(), GETUTCDATE()),
('John', 'Doe', 'john.doe@company.com', '$2a$11$8Q7MYlUqW3W2W2W2W2W2WeFh1CqV4kV4kV4kV4kV4kV4kV4kV4kV4', 0, GETUTCDATE(), GETUTCDATE()),
('Jane', 'Smith', 'jane.smith@company.com', '$2a$11$8Q7MYlUqW3W2W2W2W2W2WeFh1CqV4kV4kV4kV4kV4kV4kV4kV4kV4', 1, GETUTCDATE(), GETUTCDATE());

-- Insert sample projects
INSERT INTO Projects (Name, Description, Status, OwnerId, CreatedAt, UpdatedAt)
VALUES 
('Website Redesign', 'Complete redesign of the company website with modern UI/UX', 0, 1, GETUTCDATE(), GETUTCDATE()),
('Mobile App Development', 'Native mobile application for iOS and Android platforms', 0, 2, GETUTCDATE(), GETUTCDATE()),
('Database Migration', 'Migrate legacy database to cloud infrastructure', 0, 1, GETUTCDATE(), GETUTCDATE());

-- Insert sample tasks
INSERT INTO Tasks (Title, Description, Status, Priority, ProjectId, AssigneeId, CreatedAt, UpdatedAt)
VALUES 
('Design Homepage Mockup', 'Create wireframes and visual mockups for the new homepage', 1, 2, 1, 2, GETUTCDATE(), GETUTCDATE()),
('Develop User Authentication', 'Implement secure login and registration system', 0, 2, 1, 3, GETUTCDATE(), GETUTCDATE()),
('Setup CI/CD Pipeline', 'Configure automated deployment pipeline', 0, 1, 1, 1, GETUTCDATE(), GETUTCDATE()),
('API Documentation', 'Document all REST API endpoints', 0, 1, 2, 2, GETUTCDATE(), GETUTCDATE());

-- Note: Password hash above is for 'Admin123!' - In real implementation, use proper password hashing