#!/bin/bash
qline=$(sed -n '1p' quotes.txt)
sed -i "1s/.*/$(($qline+1))/" quotes.txt
quote=$(sed -n "${qline}p" quotes.txt)
sed -i "5s/.*/$quote/" quotes.js

