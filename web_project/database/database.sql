CREATE TABLE IF NOT EXIST `user`(
    `user_id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `user_nrp` VARCHAR(255) NOT NULL,
    `user_fullname` VARCHAR(255) NOT NULL,
    `semester` VARCHAR(255) NOT NULL,
    `user_pass` VARCHAR(255) NOT NULL,
    `user_gender` VARCHAR(255) NOT NULL,
    `user_phone` VARCHAR(255) NOT NULL,
    `institusi` VARCHAR(255) NOT NULL,
    `prodi` VARCHAR(255) NOT NULL,
);