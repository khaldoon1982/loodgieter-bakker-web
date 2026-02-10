
import xml.etree.ElementTree as ET

input_svg = 'public/Loodgieter.svg'
output_svg = 'public/logo-text.svg'

# Parse the original SVG
tree = ET.parse(input_svg)
root = tree.getroot()

# Helper to register namespaces so output is clean
ET.register_namespace('', 'http://www.w3.org/2000/svg')
ET.register_namespace('xlink', 'http://www.w3.org/1999/xlink')

# Create new root for logo-text.svg
# Original viewBox 0 0 375 375
# New viewBox: Let's make it wide. e.g. 1000 300
new_root = ET.Element('svg', {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'viewBox': '0 0 1000 300',
    'width': '1000',
    'height': '300'
})

# Copy defs from original (Clip paths, etc)
defs = root.find('{http://www.w3.org/2000/svg}defs')
new_defs = ET.fromstring(ET.tostring(defs)) if defs is not None else ET.Element('defs')

# Add our new gradient to defs
# Gradient from blue-400 (#60a5fa) to cyan-400 (#22d3ee)
gradient = ET.SubElement(new_defs, 'linearGradient', {
    'id': 'dotGradient',
    'x1': '0%', 'y1': '100%', 'x2': '100%', 'y2': '0%' 
})
ET.SubElement(gradient, 'stop', {'offset': '0%', 'style': 'stop-color:#60a5fa;stop-opacity:1'})
ET.SubElement(gradient, 'stop', {'offset': '100%', 'style': 'stop-color:#22d3ee;stop-opacity:1'})

new_root.append(new_defs)

# Create a group for the icon, scaled and positioned
# Icon is 375x375. We want it to be roughly height 200px?
# Scale 0.6 => 225px. 
# Position: x=0, y=30 (vertical center in 300px height? 300-225 = 75. y=37.5)
icon_group = ET.SubElement(new_root, 'g', {
    'transform': 'translate(20, 37.5) scale(0.6)'
})

# Move all children of original root (except defs) to icon_group
for child in root:
    if child.tag.endswith('defs'):
        continue
    # We need to copy the element properly
    icon_group.append(child)

# Create text group
# Icon ends at x = 20 + 375*0.6 = 20 + 225 = 245.
# Let's start text at x=280.
text_group = ET.SubElement(new_root, 'g', {
    'transform': 'translate(280, 0)',
    'font-family': 'Inter, Roboto, Arial, sans-serif'
})

# "Loodgieter" label
# size text-sm/base relative to 300px height. 
# Relative to icon height 225px...
# If icon is 64px, text is 12px. Ratio 1:5.3
# If icon is 225px, text ~42px.
label = ET.SubElement(text_group, 'text', {
    'x': '5',
    'y': '120',
    'font-size': '45',
    'font-weight': 'bold',
    'fill': '#94a3b8',
    'letter-spacing': '0.2em',
    'style': 'text-transform: uppercase'
})
label.text = 'Loodgieter'

# "Bakr" text
# If icon 64px, Bakr 30px. Ratio 1:2.1
# If icon 225px, Bakr ~107px.
main_text = ET.SubElement(text_group, 'text', {
    'x': '0',
    'y': '210',
    'font-size': '110',
    'font-weight': '900',
    'fill': '#ffffff',
    'letter-spacing': '-0.02em'
})
main_text.text = 'Bakr'

# Span for the dot
tspan = ET.SubElement(main_text, 'tspan', {
    'fill': 'url(#dotGradient)'
})
tspan.text = '.'

# Write file
tree = ET.ElementTree(new_root)
tree.write(output_svg, encoding='utf-8', xml_declaration=True)
print(f"Created {output_svg}")
