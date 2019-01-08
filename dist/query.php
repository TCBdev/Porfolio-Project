<?php
	$data = "Admin";
	$sql = "SELECT * FROM contact WHERE email=?;";
	$stmt = mysqli_stmt_init($conn);
	if (!mysqli_stmt_prepare($stmt, $sql)) {
    echo "SQL Statement Failed";
	} else {
    mysqli_stmt_bind_param($stmt, "s", $data);
    mysqli_stmt_execute($stmt);
	}
		while ($row = mysqli_fetch_assoc($result)) {
			echo $row['email'] . "<br>";
		}
?>