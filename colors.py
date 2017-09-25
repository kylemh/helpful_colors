from random import randint
import copy
import json
import colorsys

colors_in_names = {
    'black': [],
    'white': [],
    'gray': [],
    'red': [],
    'brown': [],
    'orange': [],
    'yellow': [],
    'green': [],
    'cyan': [],
    'blue': [],
    'magenta': [],
    'pink': [],
}


def rgb_to_hex(rgb_tuple):
    return '%02X%02X%02X' % (rgb_tuple)


def random_rgb():
    return (randint(0, 255), randint(0, 255), randint(0, 255))


def get_color_family(rgb_tuple):
    r = rgb_tuple[0] / 255
    g = rgb_tuple[1] / 255
    b = rgb_tuple[2] / 255
    hue, luminosity, saturation = colorsys.rgb_to_hls(r, g, b)

    if luminosity < 0.15 or saturation < 0.05:
        return 'black'
    elif luminosity > 0.85:
        return 'white'

    if saturation < 0.25:
        return 'gray'

    hue *= 360
    if hue < 30:
        return 'red'
    elif hue < 60:
        if saturation < 0.32:
            return 'brown'
        return 'orange'
    elif hue < 90:
        if saturation < 0.32:
            return 'brown'
        return 'yellow'
    elif hue < 150:
        return 'green'
    elif hue < 210:
        return 'cyan'
    elif hue < 270:
        return 'blue'
    elif hue < 335:
        return 'magenta'
    else:
        return 'pink'


def get_shade(rgb, factor):
    """Takes RGB tuple, adjusts values by a passed factor,
    and returns the resultant hexcode"""
    rgb_copy = list(copy.copy(rgb))
    for i, hue in enumerate(rgb_copy):
        rgb_copy[i] = validate_hue(hue + factor)

    return rgb_to_hex(tuple(rgb_copy))


def validate_hue(hue):
    """Prevent any of RGB from being negative or larger than 255"""
    if hue > 255:
        hue = 255
    elif hue < 0:
        hue = 0
    return hue


def get_shades(rgb):
    """Take a hexcode string, and return a dictionary of surrounding shades.
    All bitwise operations are credited to Chris Coyier from CSS Tricks."""

    return {
        'darkest': get_shade(rgb, -100),
        'darker': get_shade(rgb, -50),
        'lighter': get_shade(rgb, 50),
        'lightest': get_shade(rgb, 100)
    }


def generate_data(number_of_batches):
    all_colors = {}
    batch_size = 12  # Number of color objects in each batch
    for batch_id in range(number_of_batches):
        all_colors[batch_id] = []  # Create { id: [], id: [], id: [] ... }
        for i in range(batch_size):
            color_rgb = random_rgb()
            color_hex = rgb_to_hex(color_rgb)
            color_name = get_color_family(color_rgb)
            all_colors[batch_id].append({
                'hexcode': color_hex,
                'family': color_name,
                'shades': get_shades(color_rgb)
            })

            # Add hexcode to correct family grouping
            colors_in_names[color_name].append(color_hex)

    return {'all_colors': all_colors, 'colors_by_name': colors_in_names}


with open('colors.json', 'w') as outfile:
    json.dump(generate_data(50), outfile)
