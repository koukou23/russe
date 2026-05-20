#!/usr/bin/env python3
"""Write the scripts.js file in parts."""
import json

# Read the JS template pieces
with open('/Users/haxor/Desktop/Apprendre le Russe/scripts.js', 'r') as f:
    old = f.read()

# We'll write the new file in multiple calls using bash
print("Ready to write")
