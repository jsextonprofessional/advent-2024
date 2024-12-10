const sampleData = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

const rawData = `42 44 47 49 51 52 54 52
24 27 30 31 32 35 36 36
80 82 85 86 87 90 94
4 5 7 10 13 14 20
38 41 40 42 45 47 50 52
43 46 48 49 52 49 52 49
38 41 42 44 47 49 48 48
60 62 61 63 67
33 36 38 35 41
31 32 32 35 37 38
68 69 69 70 71 74 75 73
29 32 34 35 35 37 38 38
83 84 85 88 88 90 93 97
23 24 25 28 28 34
78 80 83 84 86 90 93 96
43 46 47 51 52 51
22 23 25 29 29
78 81 84 87 90 94 95 99
9 11 13 15 19 25
7 9 15 17 19 21
44 46 48 54 53
83 85 90 91 91
22 23 24 25 30 34
61 63 68 70 71 76
57 54 55 57 59 61
13 10 12 13 14 12
20 19 22 25 27 27
79 76 79 81 83 87
83 82 83 85 87 89 96
59 57 54 57 59 62
30 28 29 26 27 29 27
84 83 81 83 85 87 87
47 46 48 51 54 57 54 58
12 9 6 9 12 13 15 20
5 3 5 8 9 12 12 13
84 83 83 86 83
30 27 27 30 30
27 26 28 29 29 30 34
16 15 15 18 25
74 71 72 75 78 82 84 87
62 59 63 65 66 68 70 67
22 19 20 24 24
68 67 71 72 76
36 35 36 38 41 43 47 53
19 16 17 20 27 29
68 67 72 74 71
40 39 40 45 47 47
38 37 39 46 48 49 51 55
8 6 7 10 16 19 24
44 44 47 48 50 51
91 91 93 95 97 98 96
92 92 93 94 94
62 62 65 66 68 69 71 75
9 9 12 13 14 15 16 23
29 29 28 31 34 37 40
39 39 38 39 38
95 95 97 98 95 97 97
37 37 34 35 39
48 48 46 48 55
49 49 51 53 56 56 59 60
13 13 16 19 19 21 19
94 94 97 98 98 99 99
37 37 37 40 44
64 64 64 66 68 70 76
32 32 34 38 39
6 6 10 13 15 16 19 17
64 64 68 71 71
29 29 32 36 37 38 40 44
28 28 31 35 40
33 33 40 43 45 46 49 51
7 7 9 14 16 18 15
47 47 50 51 58 59 60 60
47 47 53 55 57 58 61 65
46 46 47 49 55 56 63
32 36 37 40 41 43 45 47
21 25 27 29 27
8 12 15 16 16
5 9 12 15 17 19 23
85 89 91 92 97
44 48 45 46 49 51
50 54 56 55 58 55
23 27 26 29 30 30
37 41 43 41 43 47
86 90 92 90 91 98
24 28 31 32 33 33 35
7 11 12 12 11
89 93 93 94 97 97
48 52 55 56 59 59 63
23 27 30 30 37
53 57 60 64 67 69
37 41 45 46 48 51 54 53
67 71 75 76 79 79
60 64 67 70 74 78
73 77 78 81 84 86 90 95
14 18 20 23 29 32 34 35
61 65 66 68 74 75 72
6 10 13 14 17 22 22
82 86 91 92 94 98
45 49 51 52 59 62 68
72 77 79 81 82
15 22 25 26 27 29 31 30
21 26 28 29 31 33 33
32 39 40 43 44 47 49 53
54 60 61 63 64 71
60 66 68 70 68 70 73 76
36 41 42 44 46 43 46 43
12 19 18 20 20
55 61 63 65 66 63 64 68
29 34 37 36 37 40 42 49
50 55 57 57 58 59 61
33 39 41 44 47 50 50 48
59 66 68 68 68
65 70 70 72 74 78
26 33 35 36 36 39 42 47
33 38 42 44 45 48 49
44 51 55 58 60 59
45 52 56 59 59
22 28 30 32 36 40
27 32 34 36 37 41 42 49
70 77 80 81 82 87 90 91
74 81 83 86 92 95 96 93
8 13 14 20 21 24 24
32 37 43 46 50
55 62 64 70 72 77
87 85 84 81 79 82
91 88 86 85 82 82
80 77 74 72 68
33 31 29 27 24 21 15
28 25 26 25 24
46 44 45 43 45
26 24 26 23 21 21
47 45 42 41 43 41 37
30 28 29 28 26 21
22 20 19 16 16 13 11
37 34 31 31 32
59 56 54 54 53 50 50
63 61 60 60 58 54
16 13 13 10 9 2
35 33 30 26 24
80 78 74 71 68 65 67
67 65 62 58 56 54 54
21 20 16 13 11 7
40 38 36 34 32 28 26 21
50 48 43 42 41 39
31 29 23 20 21
83 80 77 72 70 70
56 53 51 48 45 42 36 32
84 81 78 76 70 63
85 86 85 82 79
72 74 71 69 72
67 70 69 67 65 64 62 62
25 26 24 23 22 19 18 14
75 77 74 73 71 69 67 62
80 81 80 79 81 80 78
45 46 45 42 45 42 43
93 96 95 98 98
17 20 18 19 17 13
23 26 23 22 23 18
23 26 26 25 23 21 19 17
56 58 57 55 52 52 54
37 39 36 36 34 34
35 38 36 34 31 28 28 24
50 51 51 49 47 45 38
57 60 59 57 56 52 51
47 48 46 43 39 42
13 14 11 9 7 3 1 1
40 43 40 37 35 31 30 26
32 34 32 31 30 28 24 17
58 60 53 51 48 45
15 17 10 9 6 5 4 6
42 45 43 37 37
79 81 80 73 72 68
63 64 63 62 59 56 49 42
12 12 9 6 5 3 2
13 13 11 9 10
23 23 21 20 18 17 17
27 27 25 22 20 16
75 75 73 72 65
87 87 90 88 85 83 81 80
29 29 26 25 26 24 25
38 38 39 38 35 32 32
70 70 73 70 67 66 62
57 57 60 57 56 50
49 49 49 47 45 44
29 29 26 26 25 27
22 22 22 20 18 15 14 14
77 77 77 76 72
23 23 20 20 14
54 54 53 50 48 47 43 41
14 14 12 9 5 4 3 5
23 23 21 19 17 13 13
73 73 71 67 66 62
98 98 94 93 92 91 86
60 60 54 51 48 45 44
98 98 92 89 86 84 82 84
43 43 36 35 32 31 29 29
49 49 48 46 44 39 36 32
49 49 47 45 43 41 36 31
24 20 19 18 15 14 13 10
71 67 65 63 66
36 32 29 28 26 25 24 24
77 73 70 69 66 62
44 40 37 35 33 28
44 40 37 40 38 36 34
10 6 5 2 5 2 3
29 25 26 24 24
79 75 78 77 73
96 92 89 92 86
11 7 7 6 3 2 1
19 15 13 11 10 8 8 9
32 28 25 25 25
70 66 64 64 61 57
69 65 65 62 61 56
79 75 73 69 68 65 63
97 93 89 87 90
57 53 50 49 45 43 43
59 55 51 50 47 43
49 45 44 43 41 40 36 31
72 68 66 59 56 54
87 83 82 81 80 73 74
95 91 89 87 82 82
55 51 50 48 41 37
64 60 59 56 50 43
67 62 61 58 57 56 54 51
24 17 15 14 12 14
76 69 68 66 64 62 62
47 42 41 40 39 38 36 32
62 57 54 51 50 45
73 66 63 65 63
32 26 24 26 27
44 39 36 34 31 32 31 31
91 85 88 87 85 83 79
85 80 82 79 73
87 81 78 77 75 75 74
25 20 19 19 18 19
41 35 33 31 31 31
80 75 74 71 69 69 68 64
62 57 54 54 53 47
48 41 37 35 34 32
40 33 31 28 24 21 19 20
18 13 10 6 6
66 61 58 54 50
68 61 58 56 52 50 45
68 61 58 56 49 46 45 42
79 74 68 66 63 65
19 13 10 3 2 2
84 78 72 69 65
84 78 76 75 70 64
3 4 5 8 9 8
64 67 69 72 75 78 81 81
10 12 13 15 19
66 68 70 72 78
56 58 61 58 61 64 65 67
77 79 82 84 82 80
17 20 23 26 25 27 27
57 59 61 63 60 62 63 67
59 60 58 59 65
65 66 68 69 70 70 71
85 86 87 87 89 90 89
36 37 39 40 40 40
40 41 44 44 46 50
6 7 7 8 10 12 15 22
63 66 69 73 74
22 25 27 31 33 35 38 35
22 23 27 29 30 31 31
6 8 10 12 15 19 23
57 58 59 63 65 67 72
43 45 47 50 55 56 58
75 77 79 84 81
71 72 77 80 81 81
44 45 46 47 53 55 57 61
15 17 22 24 27 30 37
88 86 88 90 91 94
74 72 74 75 76 78 80 79
60 57 60 63 63
24 23 26 27 30 33 35 39
49 48 51 54 57 64
46 43 40 43 44 45 48
43 41 42 43 41 42 40
55 54 55 56 59 60 57 57
64 62 64 67 70 68 72
42 41 38 40 43 46 53
86 85 87 87 89
84 81 83 83 80
72 69 70 73 76 76 76
65 64 64 65 67 71
71 69 71 71 73 75 81
6 5 9 12 15
46 45 48 51 55 54
70 69 72 76 76
30 28 30 33 37 40 41 45
70 69 71 72 73 77 79 84
53 51 52 54 61 62
42 39 41 46 48 51 50
16 14 17 19 24 26 27 27
74 72 75 77 84 85 89
65 63 69 71 78
81 81 84 85 86 87
81 81 84 87 88 91 88
26 26 27 30 32 35 35
18 18 21 22 24 26 29 33
21 21 22 23 26 27 29 36
61 61 64 63 66
36 36 37 40 41 38 40 39
68 68 69 67 67
51 51 48 50 54
4 4 2 3 5 7 10 17
51 51 54 57 57 58
54 54 57 57 54
62 62 64 64 65 65
64 64 66 66 70
84 84 87 89 89 95
4 4 5 7 9 13 16 17
1 1 4 6 7 9 13 11
30 30 34 35 35
54 54 57 60 64 66 67 71
58 58 59 60 63 64 68 73
90 90 91 96 99
48 48 54 55 56 57 58 56
25 25 27 34 37 38 38
54 54 55 61 64 67 71
8 8 10 13 14 15 22 27
16 20 21 24 27 29 31
38 42 44 46 47 50 47
41 45 46 49 52 54 54
41 45 47 49 51 53 57
76 80 83 84 90
63 67 69 70 68 69
10 14 16 19 21 19 22 21
43 47 49 46 46
66 70 67 68 72
36 40 43 40 46
81 85 86 86 88 90 92
66 70 70 71 73 76 73
37 41 41 42 44 46 46
4 8 8 9 12 14 18
53 57 59 60 60 62 68
80 84 85 89 90 93
64 68 71 75 76 77 79 78
25 29 33 35 36 39 39
74 78 79 82 86 87 91
26 30 33 37 44
69 73 78 80 82
70 74 80 83 86 84
23 27 28 34 37 37
55 59 61 64 70 73 75 79
32 36 38 40 42 48 51 57
63 68 71 73 76 77
62 68 69 71 72 69
82 87 88 89 92 93 95 95
51 56 59 61 62 63 66 70
19 24 25 27 29 36
56 61 62 59 62
57 64 65 63 61
46 51 53 56 54 56 56
70 76 78 81 78 82
11 17 19 21 22 20 26
26 33 35 35 37 38 39
79 85 86 89 90 91 91 89
89 94 96 98 98 98
35 40 40 42 43 45 47 51
67 74 76 76 78 84
23 30 31 32 36 39 41 44
33 39 42 45 49 47
50 57 59 63 64 64
71 77 80 81 85 87 88 92
46 53 54 58 65
50 55 58 61 62 67 68
9 14 17 22 21
74 80 83 86 91 92 93 93
35 41 48 49 52 53 57
54 60 62 64 67 73 75 82
75 74 71 69 67 64 67
31 29 28 25 25
60 58 55 54 53 52 49 45
29 26 25 23 16
90 88 85 86 83 80 78 77
9 6 3 6 7
12 9 8 7 9 6 6
97 95 92 94 90
89 87 84 87 84 82 79 74
67 65 63 60 58 58 57
54 51 48 48 45 46
93 90 87 85 85 85
36 34 34 31 30 26
86 85 84 84 79
42 40 38 35 31 30 27 24
32 29 26 22 23
39 37 34 30 27 24 23 23
85 83 79 76 74 72 68
67 64 62 60 56 55 54 47
97 94 93 91 88 87 80 79
67 65 64 59 57 59
43 40 38 36 31 29 29
22 20 18 13 10 7 3
49 47 45 42 40 34 28
75 78 75 73 70
7 8 6 4 7
95 97 95 94 94
36 37 36 33 29
96 98 95 93 92 86
3 5 6 3 2
33 36 34 31 32 35
13 16 13 14 14
45 46 48 45 43 42 38
36 37 34 36 29
27 30 30 28 27
91 92 89 86 83 83 85
80 83 83 82 82
33 35 34 32 31 31 28 24
93 95 92 92 87
41 44 43 39 36 34
17 20 16 15 16
92 94 93 90 88 87 83 83
55 58 57 54 50 46
44 45 43 41 37 31
95 97 94 93 90 83 81 80
96 99 92 91 88 90
38 41 40 39 37 32 31 31
30 33 27 24 23 22 18
22 25 23 16 14 7
20 20 18 15 12
47 47 44 41 42
39 39 38 35 32 29 27 27
84 84 83 81 79 77 73
89 89 86 83 80 78 71
71 71 68 69 67
66 66 64 66 69
67 67 64 63 66 66
56 56 55 52 51 50 51 47
62 62 59 62 59 57 56 51
75 75 72 72 69 66 64 62
81 81 80 80 82
72 72 69 69 69
43 43 42 41 41 38 34
39 39 37 37 35 32 27
24 24 20 19 16 15 13 11
18 18 14 11 12
18 18 14 13 11 10 10
82 82 80 79 76 72 71 67
71 71 70 67 63 62 59 53
91 91 84 81 78
46 46 43 37 40
14 14 8 7 7
47 47 42 39 36 33 32 28
19 19 14 12 10 9 7 2
75 71 69 67 64 63
88 84 81 80 77 75 74 76
80 76 75 74 71 70 70
79 75 74 72 68
44 40 37 36 34 28
50 46 44 47 46
51 47 49 48 47 44 42 45
35 31 33 30 28 25 23 23
19 15 14 11 13 12 11 7
49 45 44 43 44 39
23 19 18 18 15 14 12
53 49 48 48 50
56 52 52 51 51
70 66 64 64 63 62 58
75 71 69 66 66 63 57
59 55 53 49 46
94 90 86 85 83 86
90 86 82 81 81
51 47 43 41 37
63 59 56 54 50 45
75 71 68 65 60 57 54
25 21 18 13 10 8 9
95 91 85 84 84
96 92 89 86 81 77
42 38 36 34 28 27 25 20
52 45 43 41 39 38
61 56 54 52 51 53
90 83 82 79 77 76 76
99 94 92 89 88 84
50 45 43 41 39 38 35 29
10 5 8 7 6
68 63 62 59 61 64
89 82 79 82 79 77 77
15 8 9 8 5 1
22 17 14 17 12
22 17 16 13 10 10 9 8
31 24 21 20 17 17 15 16
60 55 54 54 54
59 54 52 51 49 46 46 42
95 88 86 86 81
57 52 49 46 45 41 40 39
46 41 38 36 32 33
31 26 24 21 19 17 13 13
58 52 50 46 45 43 42 38
40 35 34 30 29 23
93 88 87 82 81 78
84 78 75 72 66 69
58 52 47 46 46
21 15 13 12 7 5 1
60 54 53 48 41
43 45 52 54 55 55
62 58 55 52 55 54 50
27 26 23 20 18 20 16
21 19 21 19 18 16 14 12
5 12 15 21 22 21
43 36 34 37 36 35 37
49 50 47 46 47 45 45
53 53 49 46 43 42 40 40
52 51 49 52 49 44
29 35 38 40 42 41 43 47
68 69 68 66 65 58
84 84 87 89 90 91 93 94
18 18 16 15 17
2 2 4 6 8 8
52 52 54 52 53 57
84 88 89 96 95
30 32 35 37 39 42 46 45
34 27 25 18 15 8
48 44 43 41 34 33 29
32 32 33 32 33
96 96 96 94 92 85
97 94 92 90 88 87 83
36 32 35 33 32 29 27 28
35 28 27 22 18
41 45 47 44 47 49 47
48 51 52 53 56 60 62
88 82 80 77 78 72
39 41 44 51 55
17 17 21 22 26
59 61 63 66 67 65
93 89 91 88 85 82 75
89 85 84 81 78 79
23 18 16 15 18 16
19 15 16 15 15
20 20 21 23 30 37
82 75 74 71 69 67 70
12 12 16 18 24
60 60 59 56 49 49
68 68 70 73 74 80 81 78
20 23 25 22 20 18
26 26 27 30 30 33 34 32
89 84 79 78 78
32 31 29 31 33 36
12 9 11 13 15 19
21 28 30 31 32 35 37 37
77 77 76 73 71 68 67
84 83 80 80 75
76 73 71 69 68 69
47 40 34 31 29 27 24 26
27 33 34 38 40 41 42 45
60 59 60 62 63 66 64 64
59 63 64 65 67 69 70 74
15 8 10 8 8
56 56 55 53 51 47 42
69 68 67 64 63 59 58 54
71 68 69 67 70 72 78
66 69 66 64 61 59 55 57
13 13 10 9 6 6 4 1
94 89 87 85 82 80 76 73
18 23 23 26 28
19 19 18 17 15 14 10 13
18 22 23 20 24
36 32 31 24 22 20
39 41 39 36 35 35
73 70 67 68 71 72 73 77
20 18 18 21 21
89 91 94 95 96 95 97 97
62 58 57 55 52 51 51
96 96 95 93 92 90 87 80
56 57 57 55 54 51 49
22 18 17 16 13
40 44 45 42 45 46 46
96 92 89 89 84
84 83 81 76 75 75
23 24 27 29 32 32 35
88 90 90 89 87 89
89 82 78 76 72
11 9 13 16 18 22
70 67 66 64 62 58 51
78 78 77 76 71 68 65
70 70 72 75 78 80 83 90
37 31 31 28 27 27
4 4 6 9 10 11 15 18
11 11 13 13 17
53 59 62 64 61 62 62
77 81 80 81 82 84 89
2 7 12 15 16 19 20 23
58 58 61 64 67 64 66 68
3 6 9 12 15 16 16
46 45 45 47 49 46
65 66 63 61 60 55 53 56
39 33 31 27 27
26 30 31 35 37 37
51 55 57 59 59
97 97 96 95 96 95
96 89 87 84 85 81
9 13 15 15 17 20 24
37 30 28 25 24 23 22 17
41 35 35 32 35
43 45 43 46 47
62 62 60 58 55 53 53
10 14 17 21 24 26 29
93 93 90 89 85
77 77 84 86 88
90 88 88 91 98
98 95 92 91 90 90 87 87
71 72 76 79 83
27 27 25 24 20 18 17
45 51 52 54 56 59 61 59
20 20 20 19 16 18
32 28 28 26 24 23 22
30 33 34 39 41 43 50
33 32 29 27 22
28 26 28 31 35 36
63 66 59 58 56 53 51
66 70 72 76 80
62 62 66 67 70 72 72
66 67 67 64 63 60 59 53
23 27 29 30 31 36
87 80 79 78 75 71
97 98 97 96 95 90 86
75 72 75 81 82 85 89
36 31 28 28 26 23 21 14
32 37 44 45 48 48
50 54 55 57 59 62
73 76 75 72 70 67 60 54
64 68 69 71 69 72 74 75
57 64 66 68 72 73 75 75
87 87 86 87 85 81
74 80 84 87 92
99 95 94 91 88 81 81
41 38 40 38 38
30 34 37 40 43 49 49
28 26 28 31 32 33 39
61 65 65 67 68 70 72 75
59 60 64 67 74
44 46 46 47 47
30 26 25 24 22 18
18 20 23 25 28 29 34
66 66 67 68 69 69 71 76
82 83 84 86 88 88 85
37 33 31 30 29 26 20
11 11 11 10 7 7
58 59 61 59 62 64 68
38 39 36 34 32 29 25
50 56 59 61 63 65 71
33 36 37 34 39
39 35 32 30 26 27
20 26 28 29 26 29
38 37 39 45 45
1 2 5 8 8 15
54 54 56 58 63 65 66 66
29 34 36 37 40
89 85 82 81 80 76 75 74
37 41 46 48 51 55
98 94 94 93 91 90 86
6 3 5 8 10 12 12
20 27 24 27 32
38 33 27 24 23 22
59 60 57 55 53 51 52
19 25 26 26 31
83 83 85 82 84 85 84
44 45 44 44 44
6 11 14 16 22 24 25 30
9 7 10 7 6 9
74 75 72 68 67 63
64 57 56 53 51 49 49
33 31 31 29 27 24 22 18
74 71 70 67 63 62 65
25 21 17 16 12
18 22 25 28 28 30 33 33
88 86 82 79 76 74 71 70
21 25 28 29 36 43
82 83 87 89 90 90
62 62 61 60 59 58 52 54
87 88 85 86 83 81 77
65 59 57 57 53
77 70 69 66 63
42 38 37 35 32 26 19
47 47 46 43 40 37 31 26
4 4 6 5 2 2
78 78 75 74 71 67 63
85 84 78 75 73 67
38 37 38 40 43 46 43
40 35 35 34 32
5 5 7 9 12 16
70 66 64 60 59 57 54 49
62 63 61 62 57
37 37 38 37 36 34 28
38 43 43 44 46 47 46
84 83 82 78 78
27 24 27 30 31 35 42
82 83 84 85 92 94
74 77 78 81 79 80 77
80 80 77 70 67 65 64 60
40 44 46 49 51 51 48
43 47 48 54 56
20 16 14 12 8 8
57 55 57 60 63 60 58
91 94 93 92 90
14 21 24 25 26 27 27 27
76 76 83 84 86 90
54 57 58 60 66 64
21 22 24 21 22 25 27
17 16 14 11 9 7 7
78 74 73 72 71 68 62 65
91 91 92 94 96 99 98
55 55 54 55 60
85 81 80 78 76 76 73 73
56 60 62 64 66 68 72 78
37 44 46 50 52 54 56 60
32 33 32 30 26 20
61 66 67 68 70 70 71 75
47 44 42 42 39 38 36 34
9 8 10 17 20 21 24
78 72 68 65 62 60 53
31 29 32 39 45
48 46 49 50 53 54 56 57
20 24 25 26 29 30 28
86 84 89 92 94 97 95
11 11 12 14 14 17 18 18
20 24 25 29 31 33 30
51 53 55 57 58 60 62
15 13 11 9 7 4
63 64 65 68 71 73
31 33 36 38 40 43 45 48
60 58 56 55 54 51
2 4 6 9 12 13 15 16
13 16 19 20 22 24 27
69 70 73 75 77 79
31 32 34 36 38 39 41
18 21 22 24 26
7 8 11 13 15 18 20 23
52 50 47 46 43
40 37 34 32 31 29
24 26 27 29 32 34 37
33 30 28 25 22 19 17
13 10 7 6 5 3 2
24 22 20 18 16 14 11
69 66 64 62 60 59 58
33 32 30 29 28 27
94 93 90 87 86
38 35 32 30 27
63 65 66 67 68 70
55 57 60 62 65 66 68
54 57 58 60 63 66
30 29 27 24 23
17 16 15 12 10 7 5 3
58 57 54 53 51 49 47
17 19 21 24 27
74 76 78 81 84 85 88 89
75 73 72 70 67 64 62
52 53 56 59 62
36 33 31 29 26 23
81 84 87 88 91
89 87 84 83 82 79 76
30 33 34 36 38 41 42 44
37 36 34 33 32 29 28
97 96 95 92 91 89
26 29 30 31 34 37 38
47 46 43 41 39 36
14 16 19 20 23 26 29
67 68 71 74 77 80
67 65 63 61 60 57 54
17 18 21 24 27 30 33
93 92 89 86 85
50 53 55 57 59
45 47 50 51 54 57
56 58 59 60 62 65 67
84 82 80 79 76 74 71 70
47 44 41 39 37
54 56 57 60 61 64
64 61 59 56 55
34 36 37 38 39
57 56 53 51 48 46 43
76 73 71 68 65 62 60
27 29 32 33 34 37 40
57 59 61 63 66 68
40 39 38 37 34 33
44 43 40 37 35 32 31 29
37 36 35 34 31 29 26
28 26 25 24 22 19 17
67 68 70 73 75 77
47 44 41 39 36 35 34
89 87 86 85 82
35 37 39 40 42
77 75 72 71 69 66
44 43 41 40 38
60 61 63 64 66 69
20 17 16 15 13 12
10 9 6 5 2
95 93 92 89 88 86
36 33 31 30 27 25
81 80 77 74 72
63 64 66 68 70
30 33 36 39 41 44 45 46
66 69 70 72 73 76 77 79
86 89 92 93 95
52 53 56 58 59 62 65 66
42 39 38 35 33 32 29
11 12 14 15 16
31 34 36 38 40 41
57 60 61 63 65 66
27 24 21 18 17 15 12 10
57 56 55 53 50 48
25 22 20 18 15
70 67 64 62 61
21 23 24 26 28
12 9 6 4 3
76 77 80 82 85 88 89 92
56 53 50 49 46 44 41 40
85 88 90 93 95 96 98
71 73 76 79 81 83
46 47 50 52 54 55 56
70 71 72 74 77
53 51 48 46 44 43 42 39
2 4 6 9 10 12 13
58 56 54 53 52 51
65 68 71 72 75
85 84 81 80 78 77 74
19 20 22 25 26 29 32 35
6 8 10 13 15 18 20
62 59 57 55 54
21 20 19 16 15
17 15 12 10 8
88 90 91 92 93 95 96
37 36 34 32 31
77 79 82 85 86 87
78 81 84 86 88 89
44 43 42 39 37 34 31 28
55 52 49 46 44 41 40 38
86 87 88 90 93 94 95 97
69 67 66 64 61
30 31 34 37 39
74 75 77 80 82 83 84
46 49 50 52 55 56
80 77 76 75 74
58 61 64 67 69 72 74
85 87 88 90 93 94 96 97
79 82 84 87 89 90 92 94
12 15 17 19 22
30 29 27 26 25
39 38 35 34 32
57 56 55 54 53 50 47 44
63 61 58 55 54 52 50
93 92 91 88 87
45 47 49 50 51
69 67 66 64 61 58 56
55 53 52 51 48 45 44
64 63 61 58 57
73 74 75 77 78 79
9 6 4 3 1
19 22 24 26 27 29
24 23 21 19 17 14
82 80 78 75 72 71
22 24 25 28 31
59 60 63 64 66
22 23 26 27 30
67 65 64 61 60 59
22 23 25 26 28 30 33 36
34 35 37 38 40 43 44 47
71 70 69 66 64 61
44 41 40 37 36
32 33 34 37 39 42 45 47
37 38 39 41 44 47
56 53 52 50 49 48
75 74 71 69 67 64 61 58
93 92 89 88 86 84 83
16 14 11 9 8 7 6 4
42 45 47 50 52
85 86 89 90 93
79 82 83 84 86 89 90
40 38 37 34 32 29
40 43 44 46 48 49
86 85 83 82 81 80
91 88 86 85 82 81
49 50 52 54 56 58 60
55 56 57 58 60
83 81 79 76 73 70 68 66
43 42 40 39 37 36 33
57 58 59 60 63
48 50 51 54 57 58
36 37 38 40 43 45 46 49
37 38 39 42 43 46
72 71 69 66 63 60 59
56 55 53 50 49 47 44
56 58 59 62 63
35 37 38 41 44 46 49 51
30 28 27 25 24
71 70 69 68 67
68 66 65 63 62 60 57 54
60 61 63 64 65 66 67
1 4 5 6 9 10
30 27 25 22 20 19 17 15
60 59 58 57 55 52
53 54 56 57 59 62 63 64
93 91 88 87 86 84 83 81
96 93 92 89 87 85 83 82
65 63 61 58 55 54 53 51
10 13 16 18 19 22 25 26
26 27 29 32 35 37 40 42
90 87 84 82 80 79 77
55 57 58 59 62 65
38 41 42 45 48 51
12 13 15 17 19 22 23
61 59 58 55 53 52
2 3 5 8 11 13 16 18
60 62 64 67 68 71 74 76
13 10 9 8 7 6 3 1
66 69 70 73 75 76 79
67 66 65 62 60 57
87 84 82 80 77 75 72
78 80 82 85 86 88 91 93
39 36 34 32 29 26
24 22 21 20 18
41 38 35 32 29 28 27 25
86 87 88 90 92 95
96 95 93 90 88
37 40 42 44 47
36 39 41 44 47 48 50 51
89 90 93 94 95 96
19 16 15 14 12 10 9
66 67 68 69 70 72 73 76
87 85 84 82 79 76 73 71
50 53 55 56 57
31 33 35 37 38 40 41 44
63 60 59 57 56 54
14 16 19 20 21 22
82 81 78 75 74
53 55 57 59 60 62 64
88 91 93 94 96 97
62 64 65 67 69 70 72 75
14 12 11 9 8
23 22 21 18 17 14 12 11
85 82 79 78 77
49 52 55 58 60 61
66 67 70 72 75 78 81
76 79 81 84 87 90 92
38 40 42 43 44 47
45 42 39 36 33 32 31
53 56 59 62 63 66 68 71
77 76 73 70 68 66
42 40 37 36 35 33 30 28
4 7 9 12 13 16 17
84 87 88 89 91
33 34 37 38 40
13 15 17 20 23 26 29 31
63 62 61 58 57
12 9 7 6 5 4 2 1
86 87 88 90 91
88 85 84 83 80 77
12 11 10 7 6
58 59 61 62 63 65 67 69
55 52 51 48 46 43 42
64 61 59 56 54 52 50
93 90 89 87 85 84 81
40 41 43 46 49
65 63 62 60 59 56 55
87 86 83 80 78 76
34 36 39 40 43
24 25 28 31 34 37 38 39
30 27 24 22 21
26 25 24 23 21 19 16 13
47 45 42 41 40 39
35 34 33 31 29
24 23 20 18 17 16 15 14
82 80 77 74 71
16 18 21 24 27 30 33
61 58 57 56 55
40 39 37 35 32
70 72 75 78 80 83 86 89
68 65 63 62 61 59
91 89 87 85 82 81 80
5 6 8 11 13
24 26 29 32 34
46 47 48 49 50 53 56
69 71 73 76 79 81 84
2 4 6 9 12 15 17
64 65 66 67 68
68 67 64 63 61
38 36 35 33 32 29 28
22 21 20 19 18 15
61 60 57 54 51
15 13 11 10 7 4
5 7 9 12 14 17 18 20
89 86 85 84 81 80 77
31 34 36 39 42 43
95 92 90 89 88
74 75 76 78 81 82 85 86
6 7 10 13 14 15 17 19
75 77 79 81 82
52 53 54 55 56 58
43 40 39 38 37 36 35
54 51 50 49 46
70 73 74 76 78 80
67 66 65 62 59 58 57
31 33 34 35 37 39
56 58 59 62 63 66 69 70
24 22 21 20 18 16 15
22 23 24 25 27
82 83 84 87 88
41 43 45 46 49 52
24 22 21 19 16 15 13 12
61 64 66 69 71 72 75 77`

// parse raw data into an array of Reports (an array of number arrays)
const parseReportsData = (input: string): number[][] => {
  // Split the input string by newlines to get each line of numbers
  const lines = input.split('\n');

  // Map over each line, splitting by spaces and converting each string to a number
  const result = lines.map(line =>
    line.split(' ').map(num => parseInt(num, 10))
  );

  return result;
}

// util to check each report is safe or not
const isReportSafe = (report: number[]): boolean => {
  if (report.length < 2) {
    return false;
  }

  const isIncreasing = report[0] < report[1]

  for (let i = 0; i < report.length - 1; ++i) {
    const diff = report[i + 1] - report[i];

    if ((isIncreasing && diff <= 0) || (!isIncreasing && diff >= 0)) {
      return false;
    }
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }
  }

  return true;
}

const dummyData =
  // [7, 6, 4, 2, 1]
  // hi markus
  [9, 7, 6, 2, 1]

console.log('isReportSafe tho?', isReportSafe(dummyData));

const countSafeReports = (input: string): number => {
  const parsedReports = parseReportsData(input)

  let safeReports = 0;

  // iterate through the array of Reports
  for (let i = 0; i < parsedReports.length; ++i) {
    // for each Report, check each Level (number) in the Report.
    if (isReportSafe(parsedReports[i]) === true) {
      safeReports += 1;
    }
  }

  // return how many reports are safe
  return safeReports;
}

console.log('countSafeReports', countSafeReports(rawData));
